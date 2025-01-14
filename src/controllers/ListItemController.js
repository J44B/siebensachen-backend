import { EventList, Item, ListItem } from '../models/indexModels.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export async function createListItem(req, res) {
    const {
        params: { listId, itemId },
    } = req;

    const list = await EventList.findByPk(listId);
    const item = await Item.findByPk(itemId);

    if (!list || !item) throw new ErrorResponse('List or Item not found', 404);

    // Create the ListItem entry
    const newListItem = await ListItem.create({
        list_id: listId,
        item_id: itemId,
        isChecked: false, // Default state for new items
    });

    // Fetch the newly created ListItem and include the Item details
    const recall = await ListItem.findOne({
        where: { id: newListItem.id },
        include: [{ model: Item, attributes: ['title'] }],
    });

    // Return the ListItem with associated Item data
    res.status(201).json(recall);
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
        include: [{ model: Item }], // Include the associated Item data
    });

    if (!listItem) throw new ErrorResponse('Item not found', 404);

    res.json(listItem);
}

export async function getAllItemsFromList(req, res) {
    const { listId } = req.params;
    try {
        // Fetch all ListItems for the given list
        const listItems = await ListItem.findAll({
            where: { list_id: listId },
            include: [{ model: Item }],
            attributes: ['id', 'isChecked'], // Ensure you're getting the ListItem's id
        });

        if (!listItems.length)
            throw new ErrorResponse('No items found for this list', 404);

        res.json(listItems);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching list items' });
    }
}

export async function updateListItem(req, res) {
    const { listId, itemId } = req.params;
    const { isChecked } = req.body;

    // Find the ListItem by listId and itemId
    const listItem = await ListItem.findOne({
        where: {
            list_id: listId,
            item_id: itemId,
        },
    });

    if (!listItem) throw new ErrorResponse('ListItem not found', 404);

    // Update the isChecked status
    listItem.isChecked = isChecked;
    await listItem.save();

    res.json(listItem);
}

export async function deleteItemFromList(req, res) {
    const {
        params: { itemId },
    } = req;

    const listItem = await ListItem.findByPk(itemId);

    if (!listItem) throw new ErrorResponse('Item not found in list', 404);

    await listItem.destroy();

    res.json({ message: 'Item deleted from list' });
}
