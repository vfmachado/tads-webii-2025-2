import { User } from "./user.js";


export class UserService {

    // injetar o repository
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    // objeto é o tal do DTO 
    async createUser({ name, cpf, email, password}) {
        // cria um objeto do tipo usuario
        const user = new User(null, name, cpf, email, password);

        // passa o objeto para o repository salvar no banco
        // isso pode gerar erros (unique keys)
        try {
            await this.usersRepository.salvar(user);
            return user;
        } catch (error) {
            throw new Error('nao foi possivel criar o usuario')
        }
    }


}