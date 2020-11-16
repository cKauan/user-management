import jwt from 'jsonwebtoken';

const secret = String(process.env.JWT_SECRET);

interface JWTPayload {
    [key: string]: string;
}
interface UserPayload {
    user: string;
    iat: number;
    exp: number;
}
export function sign(payload: JWTPayload): string {
    return jwt.sign(payload, secret, {
        expiresIn: '24h',
    });
}
export function verify(token: string): UserPayload {
    return jwt.verify(token, secret) as UserPayload;
}
