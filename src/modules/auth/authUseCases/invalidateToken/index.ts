import { BlackListRepository } from "../../../blackList/repositories/implementations/BlackListRepository";
import { InvalidateTokenController } from "./invalidateToken.Controller";
import { InvalidateTokenUseCase } from "./invalidateToken.UseCase";

const blacklistRepository = new BlackListRepository()

const invalidateTokenUseCase = new InvalidateTokenUseCase(blacklistRepository)

export const invalidateTokenController = new InvalidateTokenController(invalidateTokenUseCase)