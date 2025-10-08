# UPLOAD DE ARQUIVOS

| Critério           | Upload Direto para Backend (Storage Interno)                     | Upload Direto para Backend (Storage Dedicado - S3)            | Upload Assinado (Direto no Storage Dedicado - S3)               |
| ------------------ | ---------------------------------------------------------------- | ------------------------------------------------------------- | --------------------------------------------------------------- |
| **Fluxo**          | Cliente → Backend → Storage interno                              | Cliente → Backend → S3                                        | Cliente → S3 com URL assinada                                   |
| **Complexidade**   | Baixa (simples de implementar)                                   | Média (precisa integrar SDK do S3 no backend)                 | Média (AWS já oferece suporte nativo para signed URLs)          |
| **Performance**    | Limitada pela capacidade do backend (trafega tudo pelo servidor) | Limitada pelo backend e pela rede até o S3                    | Excelente, pois o upload vai direto para o S3                   |
| **Escalabilidade** | Baixa (servidor vira gargalo)                                    | Média (backend ainda recebe todo tráfego)                     | Alta (backend só gera URL, upload não passa por ele)            |
| **Custo de Infra** | Pode ser alto (armazenamento local, discos, backup)              | Médio/alto (S3 + custo de tráfego via backend)                | Otimizado (paga apenas storage e tráfego direto no S3)          |
| **Segurança**      | Controle total no backend                                        | Controle via backend + políticas do S3                        | Muito seguro (URLs temporárias, permissões granulares IAM)      |
| **Latência**       | Maior (dupla passagem: cliente → backend → storage)              | Maior (mesmo fluxo, mas com S3 no final)                      | Menor (cliente → S3 direto)                                     |
| **Casos de Uso**   | Aplicações pequenas, protótipos, ambientes controlados           | Sistemas que já usam S3 mas não têm grande volume de arquivos | Padrão de mercado para apps escaláveis, grandes volumes e nuvem |


---

## 🔹 1. Upload com **Formidable** (direto no backend)

Aqui o arquivo passa pelo **servidor** e depois é salvo no **S3** ou em storage interno.

```ts
// src/routes/upload.ts
import { Router } from "express";
import formidable from "formidable";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";

const router = Router();
const s3 = new S3Client({ region: "us-east-1" });

router.post("/upload", (req, res) => {
  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({ error: "Erro ao processar upload" });
    }

    const file = files.file as formidable.File;
    const fileStream = fs.createReadStream(file.filepath);

    try {
      await s3.send(
        new PutObjectCommand({
          Bucket: "meu-bucket",
          Key: `uploads/${file.originalFilename}`,
          Body: fileStream,
        })
      );
      res.json({ message: "Upload concluído via backend" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao salvar no S3" });
    }
  });
});

export default router;
```

➡️ Aqui o fluxo é: **Cliente → Backend → S3** (mais simples, mas backend vira gargalo).

---

## 🔹 2. Upload com **Command Pattern + S3 Signed URL**

Neste caso usamos o **Command Pattern** para organizar as operações com o S3 (bom para escalar e dar manutenção).
O upload vai **direto para o S3** via URL assinada.

### Estrutura do Command Pattern

```
src/
 ├─ commands/
 │   ├─ S3Command.ts
 │   ├─ GenerateUploadUrlCommand.ts
 │   └─ DeleteFileCommand.ts
 └─ routes/
     └─ upload.ts
```

### Classe base do comando

```ts
// src/commands/S3Command.ts
export interface S3Command<T> {
  execute(): Promise<T>;
}
```

### Comando para gerar URL assinada

```ts
// src/commands/GenerateUploadUrlCommand.ts
import { S3Command } from "./S3Command";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export class GenerateUploadUrlCommand implements S3Command<string> {
  private bucket: string;
  private key: string;
  private s3: S3Client;

  constructor(bucket: string, key: string) {
    this.bucket = bucket;
    this.key = key;
    this.s3 = new S3Client({ region: "us-east-1" });
  }

  async execute(): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: this.key,
    });

    return await getSignedUrl(this.s3, command, { expiresIn: 60 });
  }
}
```

### Rota que usa o comando

```ts
// src/routes/upload.ts
import { Router } from "express";
import { GenerateUploadUrlCommand } from "../commands/GenerateUploadUrlCommand";

const router = Router();

router.post("/upload-url", async (req, res) => {
  const { filename } = req.body;

  const command = new GenerateUploadUrlCommand("meu-bucket", `uploads/${filename}`);
  const url = await command.execute();

  res.json({ url });
});

export default router;
```

➡️ Aqui o fluxo é:
**Cliente → Backend (gera signed URL) → S3 (upload direto)**.
O backend não processa o arquivo, apenas autoriza.

---

🔎 Diferença clara:

* **Formidable**: bom para sistemas pequenos, backend controla tudo.
* **Command Pattern com S3**: backend delega o upload, ficando mais **performático e escalável**.

