
const axios = require('axios')
axios.defaults.validateStatus = false;

test(' get para / deve retornarm status code 200 e a msg WEBII',  async () => {

    const response = await axios.get('http://localhost:3000/');
    expect(response.status).toBe(200);
    expect(response.data).toBe('WEBII');

});

test("devo criar um usuario e a aplicacao deve atribuir um ID e um nickname", async () => {

    const input = {
        name: "Vinicius",
        cpf: "77950351080"
    }

    const response = await axios.post('http://localhost:3000/users', input);

    const { data } = response;  // destruturacao
    // const data = response.data;
    expect(response.status).toBe(201);
    expect(data.id).toBeDefined();
    expect(data.nickname).toBeDefined();
    expect(data.name).toBe(input.name);
    expect(data.cpf).toBe(input.cpf);
});