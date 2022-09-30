import { JwtPayload, sign } from 'jsonwebtoken'

export interface IUser {
	id: string
	first_name: string
	last_name: string
	email: string
	password: string
	status: string
	created_at: Date
	updated_at: Date
}

export class GenerateTokenProvider {
	async acessToken(user: IUser) {
		const payload: JwtPayload = {
			sub: user.email,
			iss: 'xestor.api.auth'
		}

		const accessToken = sign(payload, process.env.SECRET as string, {
			expiresIn: '1h',
		})

		return accessToken
	}

	async refreshToken(user: IUser) {
		const payload: JwtPayload = {
			sub: user.email,
			iss: 'xestor.api.auth'
		}

		const refreshToken = sign(payload, process.env.SECRET as string, {
			expiresIn: '15d',
		})

		return refreshToken
	}

}