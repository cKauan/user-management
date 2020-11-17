import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import knex from '../database/connection';
import AdminUserView from '../views/user_admin_view';
import * as jwt from '../utils/jwt';
import * as Yup from 'yup';
import AdminUserType from 'src/models/Admin';

export default {
    async create(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;
        const data = {
            name,
            email,
            password,
        };
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required().email(),
            password: Yup.string().required(),
        });
        await schema.validate(data, {
            abortEarly: false,
        });

        const passwordHash = bcrypt.hashSync(password, 10);
        await knex('admin').insert({ ...data, password: passwordHash });
        const user: AdminUserType = await knex('admin')
            .where({ ...data, password: passwordHash })
            .first();
        const token = jwt.sign({
            user: user.id,
        });
        return response
            .status(201)
            .json({ ...AdminUserView.render(user), token });
    },
    async login(request: Request, response: Response): Promise<Response> {
        const headerAuth = request.headers.authorization;
        if (!headerAuth) {
            return response.status(401).json({
                message: 'Authentication Fails',
                error: 'Invalid Credentials',
            });
        }
        const [, hash] = headerAuth.split(' ');
        const [email, password] = Buffer.from(hash, 'base64')
            .toString()
            .split(':');

        const user: AdminUserType = await knex('admin')
            .where({ email })
            .first();

        const validateUserAndPassword = user
            ? bcrypt.compareSync(password, user.password)
            : false;

        if (!validateUserAndPassword) {
            return response.status(401).json({
                message: 'Authentication Fails',
                error: 'Invalid Credentials',
            });
        }

        const token = jwt.sign({
            user: user.id,
        });
        return response.json({ ...AdminUserView.render(user), token });
    },
};
