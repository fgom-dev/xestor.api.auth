import { Request, Response } from "express";

export class ValidateController {
	handle(req: Request, res: Response) {
		const email = res.get('userEmail') as string

		res.status(200).json(email)
	}
}