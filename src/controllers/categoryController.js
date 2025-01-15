import { Category } from '../models/indexModels.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export async function getAllCategories(req, res) {
    const categories = await Category.findAll({});
    if (!categories.length) throw new ErrorResponse('No category found', 404);
    res.json(categories);
}

export async function getCategoryById(req, res) {
    const {
        params: { id },
    } = req;
    const category = await Category.findByPk(id);
    if (!category) throw new ErrorResponse('Category not found', 404);
    res.json(category);
}

export async function createCategory(req, res) {
    const { body } = req;
    const newCategory = await Category.create(body);
    res.status(201).send({ newCategory });
}

export async function updateCategory(req, res) {
    const {
        body,
        params: { id },
    } = req;
    const category = await Category.findByPk(id);
    if (!category) throw new ErrorResponse('Category not found', 404);
    await category.update(req.body);
    await category.save();
    res.json(category);
}

export async function deleteCategory(req, res) {
    const {
        params: { id },
    } = req;
    const category = await Category.findByPk(id);
    if (!category) throw new ErrorResponse('Category not found', 404);
    await category.destroy();
    res.json({ message: 'Category deleted' });
}
