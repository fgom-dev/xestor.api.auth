import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/CustomError";

export function basicAuth(req: Request, res: Response, next: NextFunction) {
	const basicAuth = req.headers.authorization

	if (!basicAuth) {
		throw new CustomError(400, 'Email or password is invalid!')
	}

	const [, b64auth] = (basicAuth).split(' ')

	const [email, password] = Buffer.from(b64auth, 'base64').toString().split(':')

	res.set({ email, password });

	return next()
}