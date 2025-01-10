/*

TODOS

- Create item [x]
- Get all items [x]
- Get item by id [x]
- Update item [x]
- Delete item [x]

*/

import { Item } from '../models/indexModels.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export async function getAllItems(req, res) {
    const items = await Item.findAll();
    if (!items.length) throw new ErrorResponse('No item found', 404);
    res.json(items);
}

export async function getItemById(req, res) {
    const {
        params: { id },
    } = req;
    const item = await Item.findByPk(id);
    if (!item) throw new ErrorResponse('Item not found', 404);
    res.json(item);
}

export async function createItem(req, res) {
    const { body } = req;
    const newItem = await Item.create(body);
    res.status(201).send({ newItem });
}

export async function updateItem(req, res) {
    const {
        body,
        params: { id },
    } = req;
    const item = await Item.findByPk(id);
    if (!item) throw new ErrorResponse('Item not found', 404);
    await item.update(req.body);
    await item.save();
    res.json(item);
}

export async function deleteItem(req, res) {
    const {
        params: { id },
    } = req;
    const item = await Item.findByPk(id);
    if (!item) throw new ErrorResponse('Item not found', 404);
    await item.destroy();
    res.json({ message: 'Item deleted' });
}
