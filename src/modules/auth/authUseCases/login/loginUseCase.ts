import axios from 'axios'
import { CustomError } from '../../../../errors/CustomError'
import { GenerateTokenProvider, IUser } from '../../../../providers/GenerateTokenProvider'

interface ILogin {
	email: string
	password: string
}

interface ITokenOut {
	accessToken: string
	refreshToken: string
}

export class LoginUseCase {
	constructor(private generateTokenProvider: GenerateTokenProvider) { }

	async execute({ email, password }: ILogin) {
		const response = await axios.post('http://localhost:3000/users/validate', {
			email,
			password
		}).catch((error) => {
			throw new CustomError(error.response.status, error.response.data.error);
		});

		const user = response.data as IUser

		if (!user) {
			throw new CustomError(400, 'User or password is invalid!')
		}

		const accessToken = await this.generateTokenProvider.acessToken(user);

		const refreshToken = await this.generateTokenProvider.refreshToken(user);

		const token: ITokenOut = {
			accessToken,
			refreshToken
		}

		return token
	}
}