import { SubCategory } from '../models/indexModels.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export async function getAllSubCategories(req, res) {
    const subCategories = await SubCategory.findAll({});
    if (!subCategories.length)
        throw new ErrorResponse('No sub-categories found', 404);
    res.json(subCategories);
}

export async function getSubCategoryById(req, res) {
    const {
        params: { id },
    } = req;
    const subCategory = await SubCategory.findByPk(id);
    if (!subCategory) throw new ErrorResponse('Sub-category not found', 404);
    res.json(subCategory);
}

export async function createSubCategory(req, res) {
    const { body } = req;
    const newSubCategory = await SubCategory.create(body);
    res.status(201).send({ newSubCategory });
}

export async function updateSubCategory(req, res) {
    const {
        body,
        params: { id },
    } = req;
    const subCategory = await SubCategory.findByPk(id);
    if (!subCategory) throw new ErrorResponse('Sub-category not found', 404);
    await subCategory.update(req.body);
    await subCategory.save();
    res.json(subCategory);
}

export async function deleteSubCategory(req, res) {
    const {
        params: { id },
    } = req;
    const subCategory = await SubCategory.findByPk(id);
    if (!subCategory) throw new ErrorResponse('Sub-category not found', 404);
    await subCategory.destroy();
    res.json({ message: 'Sub-category deleted' });
}
