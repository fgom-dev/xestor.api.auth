import { IBlackListRepository } from "../../../blackList/repositories/IBlackListRepository";

export class InvalidateTokenUseCase {
	constructor(private blacklistRepository: IBlackListRepository) { }

	async execute(token: string) {
		const tokenInvalid = await this.blacklistRepository.insert(token);

		return tokenInvalid
	}
}