# NODEMAILER

---

## 1. Instalação

```bash
npm install nodemailer
```

---

## 2️. Exemplo básico usando Gmail SMTP

```ts
import nodemailer from "nodemailer";

// Cria o transportador SMTP
const transporter = nodemailer.createTransport({
  service: "gmail", // ou outro serviço
  auth: {
    user: "seuemail@gmail.com",
    pass: "senha_app_ou_senha_smtp", // use App Password se 2FA estiver ativo
  },
});

// Configuração do email
const mailOptions = {
  from: '"Minha Aplicação" <seuemail@gmail.com>',
  to: "destinatario@example.com",
  subject: "Teste de envio com Nodemailer",
  text: "Olá! Este é um email de teste enviado com Nodemailer.",
  html: "<b>Olá!</b> Este é um email de teste enviado com <i>Nodemailer</i>.",
};

// Envia o email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Erro ao enviar email:", error);
  } else {
    console.log("Email enviado com sucesso:", info.response);
  }
});
```

---

## 3️, Exemplo com **async/await**

```ts
import nodemailer from "nodemailer";

async function sendEmail() {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "seuemail@gmail.com",
      pass: "senha_app_ou_smtp",
    },
  });

  const mailOptions = {
    from: '"Minha Aplicação" <seuemail@gmail.com>',
    to: "destinatario@example.com",
    subject: "Teste Async/Await",
    text: "Envio de email usando async/await",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email enviado:", info.response);
  } catch (error) {
    console.error("Erro:", error);
  }
}

sendEmail();
```

---

## 4️. Observações importantes

* Para Gmail com 2FA, use **App Password** em vez da senha normal.
* Para outros provedores, configure o **host**, **port** e **secure** conforme o SMTP.
* Pode enviar arquivos anexados usando a propriedade `attachments`:

```ts
attachments: [
  { filename: "arquivo.txt", path: "./arquivo.txt" }
]
```

