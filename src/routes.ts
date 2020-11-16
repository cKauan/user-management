import { Router } from 'express';
import AdminController from './controllers/AdminController';
import UserController from './controllers/UserController';
import isAuthenticated from './middlewares/isAuthenticated';
import isSuperUser from './middlewares/isSuperUser';
const routes = Router();

routes.get('/users', isAuthenticated, UserController.index);
routes.post('/users', isAuthenticated, UserController.create);
routes.put('/user/:id', isAuthenticated, UserController.update);
routes.delete('/user/:id', isAuthenticated, UserController.delete);

routes.post('/sign', isSuperUser, AdminController.create);
routes.get('/login', AdminController.login);
export default routes;
