import { Router } from 'express';
import {
    createListItem,
    getAllItemsFromList,
    deleteItemFromList,
} from '../controllers/indexControllers.js';

const listItemRouter = Router();

listItemRouter.post('/:listId/:itemId', createListItem);
listItemRouter.get('/:listId', getAllItemsFromList);
listItemRouter.delete('/:listId/:itemId', deleteItemFromList);

export default listItemRouter;
