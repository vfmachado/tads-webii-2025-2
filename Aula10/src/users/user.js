
export class User {

    constructor(name, cpf) {
        // valida nome
        name = name.trim();
        [firstname, surname] = name.split(' ');

        if (this.firstname.length < 3) throw Error('Nome invalido');
        if (this.surname.length < 3) throw Error('Sobrenome invalido');

        this.firstname = firstname;
        this.surname = this.surname;
    }



}