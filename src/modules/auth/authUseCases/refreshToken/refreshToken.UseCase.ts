import axios from 'axios'
import { CustomError } from '../../../../errors/CustomError';
import { GenerateTokenProvider } from "../../../../providers/GenerateTokenProvider";
import { IBlackListRepository } from '../../../blackList/repositories/IBlackListRepository';

export class RefreshTokenUseCase {
	constructor(private generateTokenProvider: GenerateTokenProvider, private backlistRepository: IBlackListRepository) { }

	async execute(userEmail: string, tokenToInvalid: string) {
		const response = await axios.get(`http://localhost:3000/users/${userEmail}`)
			.catch((error) => {
				throw new CustomError(error.response.status, error.response.data.error);
			});

		const tokenAlreadyInvalid = await this.backlistRepository.findByToken(tokenToInvalid)

		if (tokenAlreadyInvalid) {
			throw new CustomError(401, 'Token is invalid!')
		}

		const user = response.data

		const accessToken = await this.generateTokenProvider.acessToken(user);

		const refreshToken = await this.generateTokenProvider.refreshToken(user);

		await this.backlistRepository.insert(tokenToInvalid);

		const token = {
			accessToken,
			refreshToken
		}

		return token
	}
}