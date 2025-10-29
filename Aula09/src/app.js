import express from 'express';
import formidable from 'formidable';
import { buscaUsuarios, insereUsuario } from './testedb.js';
import z from 'zod';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false}));

// faz parser de payloads JSON nos requests
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static('public'));

const images = [];


const createUserDtoValidation = z.object({
    name: z.string().trim().min(6).includes(' ')
})


app.get('/', (req, res) => {
    res.render('home', { images });
})

// ao inves de responder renderizando uma view, vamos devolver um JSON
app.get('/users', async (req, res) => {
    const users = await buscaUsuarios();
    res.json(users)
})

// request do tipo post, normalmente chega um json no req.body, e também será retornado um json
app.post('/users', /*validaCreateUser,*/ async (req, res) => {
    const payload = req.body;
    
    // name => 2 palavras com pelo menos 3 letras
    // payload.name = payload.name.trim();
    // if (
    //     !(payload.name.length > 6 &&
    //     payload.name.includes(' ') &&
    //     payload.name.split(' ')[0].length >= 3 &&
    //     payload.name.split(' ')[1].length >= 3 
    //     )
    // ) {
    //     return res.status(422).json({
    //         msg: "invalid name"
    //     })
    // }
    // email => xxx@xxx.xx
    // senha => 8+ caracteres
    // cpf => validacao?
    
    try {
        const user = createUserDtoValidation.parse(payload);

        await insereUsuario(user); // esta ocorrendo uma insercao no banco de dados
        res.json({
            msg: "TUDO CERTO",
            ...req.body
        })
    } catch (error) {
        res.status(422).json(error.issues);
    }
    
})


app.post('/publish', (req, res) => {
    // prod/users/1235314123/fotos
    const form = formidable({
        uploadDir: "../app/public/uploads",
        // uploadDir: `../app/uploads/${req.user.id}/`,
        createDirsFromUploads: true,
        keepExtensions: true
    });

    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }
        // s3Service.upload(file);
        images.push(files.imagem[0].newFilename);
        res.json({ fields, files });
    });

})

app.get('/publish', (req, res) => {
    res.render('publish')
})

// qualquer outra requisicao
app.use((req, res) => {
    res.status(404).send("NOT FOUND");
})

app.listen(PORT, () => {
    console.log("ESCUTANDO NA PORTA 3000");
});