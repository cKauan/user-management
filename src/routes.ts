import { Router } from 'express';
import UserController from './controllers/UserController';
const routes = Router();

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.put('/user/:id', UserController.update)
routes.delete('/user/:id', UserController.delete)

export default routes;