import { Router } from "express"
import { mostraListaUsuarios, mostraPaginaCriacaoUsuario } from "../controller/users-controller.js";

const usersRouter = Router();

const respostaPadrao = (req, res) => { res.send("FUNCIONA") };

usersRouter.get('/lista',  mostraListaUsuarios);

// montar o formulario (visualizar a tela onde vai ser preenchido)
usersRouter.get('/criar',  mostraPaginaCriacaoUsuario);
// receber os dados e processar
usersRouter.post('/criar', respostaPadrao);

usersRouter.get('/edit',   respostaPadrao);
usersRouter.post('/edit',  respostaPadrao);

usersRouter.get('/delete', respostaPadrao);

export  { usersRouter }