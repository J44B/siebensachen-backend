/*

TODOS

- add verifyToken to all routes

*/

import { Router } from 'express';
import {
    createEventList,
    deleteEventList,
    getAllEventLists,
    getEventListById,
    updateEventList,
} from '../controllers/indexControllers.js';
import { eventListSchema } from '../joi/schemas.js';
import validateJoi from '../middlewares/validateJoi.js';
import verifyToken from '../middlewares/verifyToken.js';

const listRouter = Router();

listRouter.get('/:eventId/:listId', getEventListById);
listRouter.get('/:eventId', getAllEventLists);
listRouter.post(
    '/:eventId',

    validateJoi(eventListSchema),
    createEventList,
);
listRouter.put('/:eventId/:listId', updateEventList);
listRouter.delete('/:eventId/:listId', deleteEventList);

export default listRouter;
