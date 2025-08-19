
import express from 'express'

// declara uma constante que recebe o retorno da execucao da funcao express
const app = express();

app.use(express.urlencoded());

const users = [];

app.get('/', (req, res) => {
    
    res.send(`
        <form action="/users" method="POST">
            <input name="username">
            <br>
            <input name="name">

            <button type="submit">CADASTRAR</button>
        </form>
    `);
});

app.get('/users', (req, res) => {
    res.type('html')
    res.write("<ul>")
    users.forEach(u => {
        res.write(`<li><a href="/profile/${u.username}">${u.name}</a></li>`)
    })
    res.write("</ul>")
    res.end();
}) 

app.post("/users", (req, res) => {
    res.send("CHEGOU " + JSON.stringify(req.body));
    const { username, name } = req.body;
    users.push({
        username,
        name
    });
})

app.get('/profile/:username', (req, res) => {
    const { username } = req.params;
    res.end("BEM VINDO(A) " + username)
})



app.listen(3000);
