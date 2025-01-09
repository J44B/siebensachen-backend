import { Router } from 'express';
import {
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent,
} from '../controllers/indexControllers.js';
import { eventSchema } from '../joi/schemas.js';
import { validateJoi } from '../middlewares/indexMiddlewares.js';
import { verifyToken } from '../middlewares/indexMiddlewares.js';

const eventRouter = Router();

eventRouter.get('/', getAllEvents);
eventRouter.get('/:id', getEventById);
eventRouter.post('/create', verifyToken, validateJoi(eventSchema), createEvent);
eventRouter.put('/:id', verifyToken, validateJoi(eventSchema), updateEvent);
eventRouter.delete('/:id', verifyToken, deleteEvent);

export default eventRouter;
