import { Request, Response } from 'express';

export default class UserController {
    index(_: Request, response: Response): void {
        response.json({ message: 'Hello world' });
    }
}
