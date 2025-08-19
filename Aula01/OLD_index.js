const { createServer } = require('node:http');

/*
servidor que aceita uma funcao como parametro
    req - request   - pedido/chamada do client
    res - response  - resposta do servidor para o pedido
*/
const server = createServer((req, res) => {
    const request = {
        url: req.url,
        method: req.method,
        headers: req.headers
    }
    if (request.url == '/cardapio' && request.method == 'GET') {
        res.write("PAO R$ 0.80\nPAO QUEIJO R$ 4.00\nR$ SANDUICHE 7.00")
    } else if (request.url == '/' && request.method == 'GET') {
        res.write(`
            <h1>BEM VINDO</h1>
            <a href="/cardapio">CARDAPIO</a>
            `)
    } 
    else {
        res.write(`<pre>${JSON.stringify(request, null, 2)}</pre>`)
    }
    res.end();
});

server.listen(3000);