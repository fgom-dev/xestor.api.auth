import { prisma } from "../../../../prisma/client";
import { IBlackListOut, IBlackListRepository } from "../IBlackListRepository";

export class BlackListRepository implements IBlackListRepository {
	constructor(private prismaBlacklist = prisma.blacklist) { }

	async findByToken(token: string): Promise<IBlackListOut> {
		const blackList = await this.prismaBlacklist.findUnique({
			where: {
				token
			}
		})

		return blackList as IBlackListOut
	}

	async insert(token: string): Promise<IBlackListOut> {
		const blackList = await this.prismaBlacklist.create({
			data: {
				token
			}
		})

		return blackList
	}
}
