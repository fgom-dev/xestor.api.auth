import { GenerateTokenProvider } from "../../../../providers/GenerateTokenProvider";
import { BlackListRepository } from "../../../blackList/repositories/implementations/BlackListRepository";
import { RefreshTokenController } from "./refreshToken.Controller";
import { RefreshTokenUseCase } from "./refreshToken.UseCase";

const generateTokenProvider = new GenerateTokenProvider()

const blacklistRepository = new BlackListRepository()

const refreshTokenUserCase = new RefreshTokenUseCase(generateTokenProvider, blacklistRepository)

export const refreshTokenController = new RefreshTokenController(refreshTokenUserCase)