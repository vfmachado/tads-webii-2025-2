import { Router } from 'express';
import { UserController } from './users-controller.js';
import { UserService } from './users-services.js';
import { UsersRepository } from './users-repository.js';
import { db } from '../db/db-connection.js';

const router = Router();

// VANTAGEM DE SER UMA CLASSE E NAO UMA FUNCAO?
// INJETAR DEPENDENCIAS (PARAMETROS VIA CONSTRUTOR)

const repository = new UsersRepository(db)
const service = new UserService(repository)
const controller = new UserController(service);
router.post('/', (req, res) => controller.create(req, res));

export default router;