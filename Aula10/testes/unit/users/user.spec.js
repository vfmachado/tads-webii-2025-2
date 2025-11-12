// import { User } from "../../../src/users/user"
const User = require('../../../src/users/user.js');

test("espero criar um usuario e ele ter nome e sobrenome", () => {
    const user = new User("Vinicius Machado");
    expect(user.firstname).toBe("Vinicius");
    expect(user.surname).toBe("Machado");
})