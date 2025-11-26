import { Router } from 'express';
import { UserController } from './users-controller.js';
import { UserService } from './users-services.js';
import { UsersRepository } from './users-repository.js';
import { db } from '../db/db-connection.js';
import { AuthController } from './auth-controller.js';

const router = Router();

// VANTAGEM DE SER UMA CLASSE E NAO UMA FUNCAO?
// INJETAR DEPENDENCIAS (PARAMETROS VIA CONSTRUTOR)

const repository = new UsersRepository(db)
const service = new UserService(repository)
const userController = new UserController(service);
const authController = new AuthController(service);

router.get('/profile', (req, res) => userController.getProfile(req, res))
router.post('/', (req, res) => userController.create(req, res));

router.post('/auth', (req, res) => authController.login(req, res));

export default router;