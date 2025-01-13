import { EventList, Item, ListItem } from '../models/indexModels.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export async function createListItem(req, res) {
    const {
        params: { listId, itemId },
    } = req;
    // console.log('Request:', req);
    // console.log('List ID:', listId);
    // console.log('Item ID:', itemId);
    const list = await EventList.findByPk(listId);
    const item = await Item.findByPk(itemId);
    if (!list || !item)
        throw new ErrorResponse('List not found' || 'Item not found', 404);
    const newListItem = await ListItem.create(
        {
            list_id: listId,
            item_id: itemId,
        },
        // { include: { model: Item, attributes: ['title'] } },
    );
    const recall = await ListItem.findOne({
        where: { item_id: newListItem.item_id },
        include: { model: Item, attributes: ['title'] },
    });
    // res.status(201).json({ newListItem });
    res.send({ recall });
}

export async function getListItemById(req, res) {
    const {
        params: { listId, itemId },
    } = req;
    const listItem = await ListItem.findOne({
        where: {
            list_id: listId,
            item_id: itemId,
        },
    });
    if (!listItem) throw new ErrorResponse('Item not found', 404);
    res.json(listItem);
}

export async function getAllItemsFromList(req, res) {
    const {
        params: { listId },
    } = req;
    const list = await EventList.findByPk(listId);
    if (!list) throw new ErrorResponse('List not found', 404);
    const items = await ListItem.findAll({
        where: {
            list_id: listId,
        },
        include: { model: Item, attributes: ['title'] },
    });
    if (!items.length)
        throw new ErrorResponse('No items found for this list', 404);
    res.json(items);
}

export async function deleteItemFromList(req, res) {
    const {
        params: { listId, itemId },
    } = req;
    const listItem = await ListItem.findOne({
        where: { list_id: listId, item_id: itemId },
    });
    if (!listItem) throw new ErrorResponse('Item not found', 404);
    await listItem.destroy();
    res.json({ message: 'Item deleted' });
}
