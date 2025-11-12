

export class UserService {

    // injetar o repository
    constructor() {

    }

    // objeto é o tal do DTO 
    async create({ name, cpf }) {
        // devolve um usuario
        const user = new User(name, cpf);
    }


}