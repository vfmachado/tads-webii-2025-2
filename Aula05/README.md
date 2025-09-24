EXERCICIO PARA CASA (VAI AJUDAR NO TRABALHO MAS NAO ESTOU OBRIGANDO NGM A FAZER)

- INCLUIR O EXPRESS-SESSION NO MATERIAL DA AULA 04
- FAZER AUTENTICACAO DO USUARIO
- PERMITIR LISTAR OUTROS USUARIOS APENAS PARA USUARIO AUTENTICADO
- PERMITIR REMOVER USUARIOS APENAS PARA ADMINS
- UTILIZAND O DB =)


npm init --yes
npm i express bcrypt express-session




AUTHENTICATION X AUTHORIZATION

Autenticação -> verifica que o usuário é de fato o usuário
    login + senha
    token (telefone/sms/email)

Autorização  -> o que o usuário pode fazer / niveis acesso
    Autorização por PERFIL / ROLE / PAPEL
    Autorização por "endpoint/recurso"


O sistema (aplicação / servidor) precisa "saber" que o usuario fez autenticacao e está "autorizado"
    - sessões / o backend envia para o client (browser) um cookie identificador daquela sessao. 
        - a informacao da sessao fica no backend / isso pesa memoria dificultando escalabilidade horizontal


REDIS
    banco in memory
    muito rapido
    guarda chave x valor
    é muito (mas muito mesmo) em sistemas de cache



- NAO ESTA PREVISTO NA EMENTA MAS VALE A PENA ESTUDAR!
AWS IAM  - permissao
AWS COGNITO - Autenticacao de sistemas
GOOGLE OAUTH SSO
META SSO (whatsapp / instagram / facebook)
CLERK