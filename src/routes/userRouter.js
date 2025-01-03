import { Router } from 'express';
import {
    signUp,
    logIn,
    getCurrentUser,
} from '../controllers/indexControllers.js';
import { userSchema } from '../joi/schemas.js';
import {
    validateJoi,
    verifyToken,
    checkIfUserExists,
} from '../middlewares/indexMiddlewares.js';

const userRouter = Router();

userRouter.post('/signup', validateJoi(userSchema), signUp);
userRouter.post('/login', logIn);
userRouter.get('/me', verifyToken, checkIfUserExists, getCurrentUser);

export default userRouter;
