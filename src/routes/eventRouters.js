import { Router } from 'express';
import { createEvent, getAllEvents } from '../controllers/indexControllers.js';
import { eventSchema } from '../joi/schemas.js';
import { validateJoi } from '../middlewares/indexMiddlewares.js';
import { verifyToken } from '../middlewares/indexMiddlewares.js';

const eventRouter = Router();

eventRouter.post('/create', verifyToken, validateJoi(eventSchema), createEvent);
eventRouter.get('/', getAllEvents);

export default eventRouter;
