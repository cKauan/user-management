import { Request, Response } from 'express';

export default {
    index(_: Request, response: Response): void {
        response.json({ message: 'Hello world' });
    }
}
