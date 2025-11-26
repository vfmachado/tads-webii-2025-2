import axios from 'axios';
axios.defaults.validateStatus = false;

beforeEach(() => {
    // limpar tudo
});

test('get para / deve retornarm status code 200 e a msg WEBII',  async () => {

    const response = await axios.get('http://localhost:3000/');
    expect(response.status).toBe(200);
    expect(response.data).toBe('WEBII');

});

test("devo criar um usuario e a aplicacao deve atribuir um ID e salvar no banco", async () => {

    const input = {
        name: "Cris Araujo",
        cpf: "77950351082",
        email: "cris@gmail.com",
        password: "123456"
    }

    const response = await axios.post('http://localhost:3000/users', input);
    const { data } = response;  // destruturacao
    // const data = response.data;
    console.log({data})
    expect(response.status).toBe(200);
    expect(data.id).toBeDefined();
    expect(data.firstname).toBeDefined();
    expect(data.cpf).toBe(input.cpf);
});