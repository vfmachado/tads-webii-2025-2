OBJETIVO DA AULA É NOS LIVRARMOS DO BANCO DE DADOS EM MEMORIA / JSON

- UTILIZAR SQL
- BETTER-SQLITE3
    facilita a sintaxe - forma de escrever o código com async / await

1. BAIXAR A ULTIMA AULA (Pasta Aula03)

2. instalar o better-sqlite3

3. Fazer um arquivo novo (teste.js) para experimentação antes de sair mexendo no resto do código  (testar a lib, aprender a usar, como preferir ler..)

4. Sugestao instalar a extensao Sqlite3 Editor (yy0931)

5. ao criar o banco, crie a tabela users

CREATE TABLE `users` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` TEXT, `email` TEXT UNIQUE, `status` TEXT, `role` TEXT, `password` TEXT, `created_at` TEXT DEFAULT (CURRENT_TIMESTAMP));

6. Crie um dado de teste (editor ou sql)

7. execute as queries de teste (teste.js)

8. leia a documentação (https://github.com/WiseLibs/better-sqlite3/blob/master/docs/api.md)

9. pesquise transaction

