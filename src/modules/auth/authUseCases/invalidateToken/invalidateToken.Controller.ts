import { Request, Response } from "express";
import { InvalidateTokenUseCase } from "./invalidateToken.UseCase";

export class InvalidateTokenController {
	constructor(private invalidateTokenUseCase: InvalidateTokenUseCase) { }

	async handle(req: Request, res: Response) {
		const jwtAuth = req.headers.authorization as string

		const [, token] = (jwtAuth).split(' ')

		const tokenInvalid = await this.invalidateTokenUseCase.execute(token)

		res.status(200).json(tokenInvalid)
	}
}