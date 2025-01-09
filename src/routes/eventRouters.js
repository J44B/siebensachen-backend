/*

TODOS

- add verifyToken to all routes

*/

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
eventRouter.post('/create', validateJoi(eventSchema), createEvent);
eventRouter.put('/:id', validateJoi(eventSchema), updateEvent);
eventRouter.delete('/:id', deleteEvent);

export default eventRouter;
