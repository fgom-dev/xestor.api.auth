import { GenerateTokenProvider } from "../../../../providers/GenerateTokenProvider";
import { LoginController } from "./login.Controller";
import { LoginUseCase } from "./loginUseCase";

const generateTokenProvider = new GenerateTokenProvider()

const loginUseCase = new LoginUseCase(generateTokenProvider)

export const loginController = new LoginController(loginUseCase)