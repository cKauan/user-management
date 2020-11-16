import { Request, Response, NextFunction } from 'express';
import knex from '../database/connection';
import * as jwt from '../utils/jwt';

export default async function isAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<Response | void> {
    const headerAuth = request.headers.authorization;
    if (!headerAuth) {
        return response.status(401).json({ message: 'Invalid authorization' });
    }
    const [, token] = headerAuth.split(' ');
    const payload = jwt.verify(token);
    const user = await knex('admin').where({ id: payload.user }).first();
    if (!user) return response.status(401).json({ message: 'Invalid token' });
    next();
}
