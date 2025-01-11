import { Router } from 'express';
import {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
} from '../controllers/indexControllers.js';
import { categorySchema } from '../joi/schemas.js';
import { validateJoi } from '../middlewares/indexMiddlewares.js';

const categoryRouter = Router();

categoryRouter.get('/', getAllCategories);
categoryRouter.get('/:id', getCategoryById);
categoryRouter.post('/', validateJoi(categorySchema), createCategory);
categoryRouter.put('/:id', validateJoi(categorySchema), updateCategory);
categoryRouter.delete('/:id', deleteCategory);

export default categoryRouter;
