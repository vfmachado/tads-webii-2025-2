import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false}));

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.get('/', (req, res) => {
    res.render('home');
})

// qualquer outra requisicao
app.use((req, res) => {
    res.status(404).send("NOT FOUND");
})

app.listen(PORT, () => {
    console.log("ESCUTANDO NA PORTA 3000");
});