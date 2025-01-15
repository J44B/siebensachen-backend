import { Router } from 'express';
import {
    createSubCategory,
    getAllSubCategories,
    getSubCategoryById,
    updateSubCategory,
    deleteSubCategory,
} from '../controllers/indexControllers.js';
import { subCategorySchema } from '../joi/schemas.js';
import { validateJoi } from '../middlewares/indexMiddlewares.js';

const subCategoryRouter = Router();

subCategoryRouter.get('/', getAllSubCategories);
subCategoryRouter.get('/:id', getSubCategoryById);
subCategoryRouter.post('/', validateJoi(subCategorySchema), createSubCategory);
subCategoryRouter.put(
    '/:id',
    validateJoi(subCategorySchema),
    updateSubCategory,
);
subCategoryRouter.delete('/:id', deleteSubCategory);

export default subCategoryRouter;
