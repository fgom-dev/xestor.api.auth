import { Router } from "express";
import { basicAuth } from "../middlewares/basicAuth";
import { jwtAuth } from "../middlewares/jwtAuth";
import { invalidateTokenController } from "../modules/auth/authUseCases/invalidateToken";
import { loginController } from "../modules/auth/authUseCases/login";
import { refreshTokenController } from "../modules/auth/authUseCases/refreshToken";
import { validateController } from "../modules/auth/authUseCases/validate";

export const authRoutes = Router()

authRoutes.post('/login', basicAuth, (req, res) => {
	return loginController.handle(req, res);
});

authRoutes.get('/refreshToken', jwtAuth, (req, res) => {
	return refreshTokenController.handle(req, res);
});

authRoutes.get('/validate', jwtAuth, (req, res) => {
	return validateController.handle(req, res);
});

authRoutes.post('/invalidate-token', (req, res) => {
	return invalidateTokenController.handle(req, res);
});