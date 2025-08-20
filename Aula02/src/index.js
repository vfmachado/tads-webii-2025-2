import express from 'express';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'src/views');


const products = [
    {
        id: 1,
        name: 'B660M',
        brand: "ASUS",
        price: 250,
        category: "Motherboard"
    },
    {
        id: 2,
        name: 'i5',
        brand: "INTEL",
        price: 300,
        category: "CPU"
    },
    {
        id: 3,
        name: '16GB DDR4',
        brand: 'CORSAIR',
        price: 150,
        category: 'Memory'
    },
    {
        id: 4,
        name: 'GPU 1',
        brand: 'AMD',
        price: 400,
        category: 'GPU',
    },
    {
        id: 5,
        name: 'GPU 2',
        brand: 'GFORCE',
        price: 450,
        category: 'GPU',
    }
];

/*
PAGINAS ESTATICAS
*/
app.use(express.static('public'))

// app.get('/', (req, res) => {
    // res.send('Hello World!');
    // res.render('');
    // res.send(arquivo)
// });

/*
TEMPLATES
*/

app.get('/products', (req, res) => {
    // res.json(products);
    res.render('products-list', { lista: products });
});

// req, res
// request, response    sao palavras normalmente utilizadas, mas podemos escolher
app.get('/products/:id', (req, res) => {
    // :id => parametro da rota
    // ao acessar o produto 1, quero ver os detalhes do produto 1

    // const id = req.params.id;
    const { id } = req.params;

                            // filter é um método para filtrar arrays em JS
    const produtoComId = products.filter(p => p.id == id)[0];

    res.render('products-detail', { product: produtoComId});

});

// posso ter quantos parametros eu quiser
// noticia/:regiao/:data/:titulo

/*
Rotas com Parâmetros e Query Params

Crie um endpoint GET /produtos/:id que retorna detalhes de um produto.

Crie um endpoint GET /busca que recebe um query param nome e retorna apenas os produtos que contêm esse nome ou essa categoria.

Exemplo:
GET /busca?nome=gpu => retorna a lista com 2 produtos
*/


/*
Middleware

Crie um middleware que:

Registra no console cada requisição feita (rota, método e hora).

Bloqueia acesso a certas rotas (POST /products) se não tiver um header Authorization válido.
*/

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
