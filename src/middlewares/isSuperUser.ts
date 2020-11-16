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
        return response.status(401).json({
            message: 'Authentication Fails',
            error: 'Invalid Credentials',
        });
    }
    const [, token] = headerAuth.split(' ');
    const payload = jwt.verify(token);
    const user = await knex('admin').where({ id: payload.user }).first();
    const adminEmail = String(
        process.env.ADMIN_EMAIL || 'carloskauanmoreiradesousa@gmail.com'
    );
    const isSuperUser = user ? user.email === adminEmail : false;
    if (!isSuperUser)
        return response.status(401).json({
            message: 'Authentication Fails',
            error: 'Invalid Credentials',
        });
    next();
}
