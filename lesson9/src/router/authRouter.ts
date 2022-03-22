import { Router } from 'express';
import { authController } from '../controller';
import { authMiddleware, userMiddleware } from '../middlewares';

const route = Router();
route.post('/registration', userMiddleware.validUser, authController.registration);
route.post('/login', userMiddleware.validLogin, userMiddleware.checkIsUserExist, authController.login);
route.post('/logout', authMiddleware.checkAccessToken, authController.logout);
route.post('/refresh', authMiddleware.checkRefreshToken, authController.refresh);

export const authRouter = route;
