import { Request, Response } from 'express';
import knex from '../database/connection';
import * as Yup from 'yup';

export default {
    async index(_: Request, response: Response): Promise<Response> {
        const users = await knex('users');
        return response.json(users);
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
        return response.status(201).json(data);
    },
};
