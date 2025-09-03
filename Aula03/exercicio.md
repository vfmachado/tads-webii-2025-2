DADO O HTML E O TEMPLATE APRESENTADO NA ULTIMA AULA
    - ROUTES
    - CONTROLLER
    - DB
    - EJS
    - APP.JS

VAMOS LEVAR O 
    Create / Edit User
PARA UMA NOVA TELA (EJS) E VAMOS ADICIONAR A AÇÃO DE CRIAR UM USUÁRIO.

1. CRIAR O ARQUIVO EJS

2. SEPARAR O FRONT
        - melhoria - transformar head / footer e outras estruturas possiveis em includes do frontend
3. ADICIONAR A ROTA / e renderizar

4. LINKAR O BOTAO +ADD USER
        - melhoria - cancelar adição retorna para a lista

5. CRIAR UMA ROTA PARA RECEBER A REQUISICAO DE CRIACAO DE USUARIO
    - lembra que o express precisar "parsear" a requisicao, mostrei isso em alguma aula =)
    app.use(express.urlencoded({ extended: false}));

    - lembra de colocar o name nos inputs do formularios senao o express nao identifica o payload

        console.log(req.body)

6. CONTROLLER + VERIFICAR RECEBIMENTO DO PAYLOAD

7. ADICIONAR NO BANCO

PUBLIC VS RENDERIZADA?
    /PUBLIC     X       EJS

- Páginas públicas são estáticas e eu nao preciso de informações da requisição como por exemplo, qual usuário solicitou, está logado, tem permissão, etc...

caminho / path (multiplas possiveis rotas)
/cursos/:busca

/cursos?s=busca
apenas uma rota passando um argumento nos query params