import { Router } from 'express';
import { signUp } from '../controllers/indexControllers.js';
import { userSchema } from '../joi/schemas.js';
import {
    validateJoi,
    checkIfUserExists,
} from '../middlewares/indexMiddlewares.js';

const userRouter = Router();

userRouter.route('/signup').post(validateJoi(userSchema), signUp);

export default userRouter;
