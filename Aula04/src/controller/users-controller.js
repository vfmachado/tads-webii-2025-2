import { select } from "../config/db.js"

// UTILIZANDO UM CONTROLLER SEM CLASSES
export function mostraListaUsuarios(req, res) {
    // res.send("RESPOSTA DO CONTROLLER");
    const dados = select();
    res.render('users-lista', { dados })
    // res.render('users-lista', { dados: dados })
}

export function mostraPaginaCriacaoUsuario(req, res) {
    res.render('users-create');
}

