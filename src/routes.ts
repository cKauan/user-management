import { Router } from 'express';
import AdminController from './controllers/AdminController';
import UserController from './controllers/UserController';
import isAuthenticated from './middlewares/isAuthenticated';
const routes = Router();

routes.get('/users', isAuthenticated, UserController.index);
routes.post('/users', UserController.create);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);

routes.post('/sign', AdminController.sign);
routes.get('/login', AdminController.login);
export default routes;
