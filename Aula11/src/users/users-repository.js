export class UsersRepository {

    // injetando a conexao do banco no repository
    constructor(dbCon) {
        this.dbCon = dbCon;
    }

    async salvar(user) {
        await this.dbCon.usuario.create({
            data: {
                id: user.id,
                firstname: user.firstname,
                surname: user.surname,
                cpf: user.cpf,
                email: user.email,
                password: user.password
            }
        });
    }


}