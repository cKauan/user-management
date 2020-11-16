import { Request, Response } from 'express';
import knex from '../database/connection';
import UserView from '../views/user_app_view';
import * as Yup from 'yup';

export default {
    async index(request: Request, response: Response): Promise<Response> {
        const { page = 1 } = request.query;
        const users = await knex('users')
            .orderBy('id')
            .limit(10)
            .offset((Number(page) - 1) * 10);
        const [{ count }] = await knex('users').count();
        return response.status(200).json({ data: users, total: Number(count) });
    },
    async create(request: Request, response: Response): Promise<Response> {
        const { name, phone, bought, notes } = request.body;
        const data = {
            name,
            phone,
            bought,
            notes,
        };
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            phone: Yup.string().required(),
            bought: Yup.number().required(),
            notes: Yup.string().required(),
        });
        await schema.validate(data, {
            abortEarly: false,
        });

        await knex('users').insert(data);
        const user = await knex('users').where({ ...data });
        return response
            .status(201)
            .json(UserView.render(user[user.length - 1]));
    },
    async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name, phone, bought, notes } = request.body;
        const data = {
            name,
            phone,
            bought,
            notes,
        };
        const schema = Yup.object().shape({
            name: Yup.string(),
            phone: Yup.string(),
            bought: Yup.number(),
            notes: Yup.string(),
        });
        await schema.validate(data, {
            abortEarly: false,
        });
        const existsData =
            Object.values(data).filter((item) => item != undefined).length > 0;

        if (existsData) {
            await knex('users').update(data).where({ id });
            const updatedUser = await knex('users').where({ id }).first();
            return updatedUser
                ? response.status(200).json(UserView.render(updatedUser))
                : response.status(404).json({
                      message: 'Validation Fails',
                      error: 'User Not Found',
                  });
        }
        return response
            .status(400)
            .json({ message: 'Validation Fails', error: 'Invalid Content' });
    },
    async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const user = await knex('users').where({ id }).first();
        if (user) {
            await knex('users').where({ id }).del();
            return response.status(200).json({ message: 'Deleted' });
        }
        return response.status(404).json({
            message: 'Validation Fails',
            error: 'User Not Found',
        });
    },
};
