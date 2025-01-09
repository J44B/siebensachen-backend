import { Router } from 'express';
import { createEventList } from '../controllers/indexControllers.js';
import { eventListSchema } from '../joi/schemas.js';
import validateJoi from '../middlewares/validateJoi.js';
import verifyToken from '../middlewares/verifyToken.js';

const listRouter = Router();

listRouter.post(
    '/',
    verifyToken,
    validateJoi(eventListSchema),
    createEventList,
);

export default listRouter;
