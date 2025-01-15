import { Router } from 'express';
import {
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem,
} from '../controllers/indexControllers.js';
import { itemSchema } from '../joi/schemas.js';
import { validateJoi } from '../middlewares/indexMiddlewares.js';

const itemRouter = Router();

itemRouter.get('/', getAllItems);
itemRouter.get('/:id', getItemById);
itemRouter.post('/', validateJoi(itemSchema), createItem);
itemRouter.put('/:id', validateJoi(itemSchema), updateItem);
itemRouter.delete('/:id', deleteItem);

export default itemRouter;
