import { Request, Response } from "express";
import { LoginUseCase } from "./loginUseCase";

export class LoginController {
	constructor(private loginUseCase: LoginUseCase) { }

	async handle(req: Request, res: Response) {
		const email = res.get('email') as string

		const password = res.get('password') as string

		const token = await this.loginUseCase.execute({ email, password })

		return res.status(200).json(token)

	}
}