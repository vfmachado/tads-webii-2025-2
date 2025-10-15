
import { transporter } from './config-email.js';

export const sendEmail = async function(to, title, body) {
    const info = await transporter.sendMail({
        from: 'fritzen.web2@gmail.com',
        to: 'fritzen.web2@gmail.com',
        subject: title,
        // text: "Hello world?", // plain‑text body
        html: body, // HTML body
    });
    
    console.log("Message sent:", info.messageId);
};


/*

    1. usuario cria a conta (sem senha) , apenas nome e email
        - O USUARIO TER UM CAMPO QUE INDICA SE ESTÁ ATIVO
        - PERMITIR UM NULLABLE PARA O PASSWORD / QUANDO FOR NULLABLE NAO PERMITE LOGIN
        - TABELAS 1:1 DE ACESSO / DADOS DO USUARIO / DADOS DA CONTA

    2. aplicacao envia um email com um link para definição de senha (que deve expirar em 1h / ou se for usado)
        - TOKEN / JWT MODIFICADO (DAVID E JOAO) -> NAO INCLUI DADOS SENSIVEIS DO USUARIO COM TEMPO DE EXPIRAÇÃO
        - VANTAGEM DE USAR TOKEN JWT?
            - nao preciso de banco
            - mais seguro

        outra alternativa SEM USAR JWT

        - GERAR UM LINK / HASH e associa no backend o hash
        
        - envia o hash ou token na requisição para
    
    - QUANDO O TOKEN É UTILIZADO
        O USUARIO PASSA A TER SENHA / LOGO NAO PODE REUTILZIAR PARA MESMA FINALIDADE

    - TEM UMA DESVATAGEM EM UTILIZAR JWT DESSE JEITO QUE É NÃO CONSEGUIR REUTILIZAR A MESMA LOGICA PARA O RESET DE SENHA

   3.  o link redireciona para uma pagina que tem um formulario apenas com o campo senha
        FORMATO DO LINK?
            app/set-password?token=asdadwadwadwaawdawdwa
             
    4. o botao envia para o sv o que?
        - NO BACKEWND VALIDAR O TOKEN / HASH
        - POST REQUEST
            +SENHA
            +TOKEN

*/