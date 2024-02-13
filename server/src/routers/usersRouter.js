/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { buildQueryMiddleware } from '../middleware/buildQueryMiddleware.js';
import CRUDController from '../controllers/CRUDController.js';
import UsersManager from '../dao/managerUsers.js';
import messages from '../utils/messages/messages.js';
const usersRouter = Router();
const userManager = new UsersManager();

const genericControllerUsers = new CRUDController(userManager, messages.users);

usersRouter.post('/', genericControllerUsers.create);
usersRouter.get('/all', buildQueryMiddleware, genericControllerUsers.getAll);
usersRouter.get('/', buildQueryMiddleware, genericControllerUsers.getOne);
usersRouter.put('/', buildQueryMiddleware, genericControllerUsers.update);
usersRouter.delete('/', buildQueryMiddleware, genericControllerUsers.delete);

export default usersRouter;