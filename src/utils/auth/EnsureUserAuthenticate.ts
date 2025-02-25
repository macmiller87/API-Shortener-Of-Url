import { Injectable, NestMiddleware } from "@nestjs/common";
import { AppError } from "../errors/AppError";
import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

interface IPayload {
    sub: string;
}

@Injectable()
export class EnsureUserAuthenticate implements NestMiddleware {
    async use(request: Request, response: Response, next: NextFunction) {
        try {
            const authHeader = request.headers.authorization;

            if (!authHeader) {
                throw new AppError("JWT Token is Missing !", 401);
            }

            const [, token] = authHeader.split(' ');

            const { sub: user_id } = verify(token, process.env.SECRET) as IPayload;

            request.user = {
                user_id: user_id,
            };

            next();

        } catch(error) {
            console.log(error)
            throw new AppError("Invalid Token !", 400);
        }
    }

}