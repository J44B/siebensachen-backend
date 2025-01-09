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

listRouter.get('/:eventId/:listId', verifyToken, getEventListById);
listRouter.get('/:eventId', verifyToken, getAllEventLists);
listRouter.post(
    '/:eventId',
    verifyToken,
    validateJoi(eventListSchema),
    createEventList,
);
listRouter.put('/:eventId/:listId', verifyToken, updateEventList);
listRouter.delete('/:eventId/:listId', verifyToken, deleteEventList);

export default listRouter;
