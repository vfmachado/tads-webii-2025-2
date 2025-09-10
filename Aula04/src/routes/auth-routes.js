import { Router } from "express"
import { mostraTelaLogin } from "../controller/auth-controller.js";

const authRouter = Router();

authRouter.get('/login',  mostraTelaLogin);

export  { authRouter }