import crypto from 'crypto';
import { User } from "../../../src/users/user.js"

test("espero criar um usuario e ele ter nome, sobrenome e cpf", () => {
    const user = new User(null, "Vinicius Machado", "99999999999", "vini@gmail.com","123456");
    expect(user.id).toBeDefined();
    expect(user.firstname).toBe("Vinicius");
    expect(user.surname).toBe("Machado");
    expect(user.cpf).toBe("99999999999")
})


test("espero restaurar o estado de um usuario com ID", () => {
    const uuid = crypto.randomUUID();
    const user = new User(uuid, "Vinicius Machado", "99999999999", "vini@gmail.com","123456");
    expect(user.id).toBe(uuid);
    expect(user.firstname).toBe("Vinicius");
    expect(user.surname).toBe("Machado");
    expect(user.cpf).toBe("99999999999")
})