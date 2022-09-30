import { NextFunction, Request, response, Response } from "express";
import { JsonWebTokenError, TokenExpiredError, verify } from "jsonwebtoken";
import { CustomError } from "../errors/CustomError";

export function jwtAuth(req: Request, res: Response, next: NextFunction) {
	const jwtAuth = req.headers.authorization

	if (!jwtAuth) {
		throw new CustomError(400, 'Token is empty!')
	}

	const [, token] = (jwtAuth).split(' ')

	try {
		const jwt = verify(token, process.env.SECRET as string, {
			complete: true
		})

		res.set({ userEmail: jwt.payload.sub })
	} catch (err) {
		if (err instanceof TokenExpiredError) {
			throw new CustomError(401, 'Token expired!')
		}
		if (err instanceof JsonWebTokenError) {
			throw new CustomError(401, 'Token invalid!')
		}
		throw new CustomError(401, Error(err as string).message)
	}

	return next()
}