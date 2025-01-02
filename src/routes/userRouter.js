import { Router } from 'express';
import { signUp, logIn } from '../controllers/indexControllers.js';
import { userSchema } from '../joi/schemas.js';
import { validateJoi } from '../middlewares/indexMiddlewares.js';

const userRouter = Router();

userRouter.post('/signup', validateJoi(userSchema), signUp);
userRouter.post('/login', logIn);

export default userRouter;
