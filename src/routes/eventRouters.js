import { Router } from 'express';
import { createEvent } from '../controllers/indexControllers.js';
import { eventSchema } from '../joi/schemas.js';
import { validateJoi } from '../middlewares/indexMiddlewares.js';
import { verifyToken } from '../middlewares/indexMiddlewares.js';

const eventRouter = Router();

eventRouter.post('/create', verifyToken, validateJoi(eventSchema), createEvent);

export default eventRouter;
