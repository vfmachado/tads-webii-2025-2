import express from 'express';
import { usersRouter } from './routes/users-routes.js';

// idealmente, temos apenas configurações aqui no app.js
const app = express();

//MIDDLEWARE QUE FAZ O PARSER DAS REQUISICOES FEITAS ATRAVES DE FORMULARIOS HTML E INJETA O PAYLOAD NO REQUEST.BODY
app.use(express.urlencoded({ extended: false}));

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use('/users', usersRouter);

// pagina inicial => mapeada para /users/lista
app.get('/', (req, res) => {
    res.redirect('/users/lista');
})

// qualquer outra requisicao
app.use((req, res) => {
    res.status(404).send("NOT FOUND");
})

app.listen(3000, () => {
    console.log("ESCUTANDO NA PORTA 3000");
});