import { Event, EventList } from '../models/indexModels.js';
import ErrorResponse from '../utils/ErrorResponse.js';

/* 

Todos

Create eventList [x]
Get all eventLists [x]
Get single eventList [x]
Update eventList []
Delete eventList []

*/

export async function createEventList(req, res) {
    const {
        body,
        params: { eventId },
    } = req;
    const event = await Event.findByPk(eventId);
    if (!event) throw new ErrorResponse('Event not found', 404);
    const newList = await EventList.create({ ...body, event_id: eventId });
    res.status(201).json({ newList });
}

export async function getAllEventLists(req, res) {
    const { eventId } = req.params;
    const event = await Event.findByPk(eventId);
    if (!event) throw new ErrorResponse('Event not found', 404);
    const lists = await EventList.findAll();
    if (!lists.length)
        throw new ErrorResponse('No lists found for this event', 404);
    res.json(lists);
}

export async function getEventListById(req, res) {
    const { listId } = req.params;
    const list = await EventList.findByPk(listId);
    if (!list) throw new ErrorResponse('List not found', 404);
    res.json(list);
}

export async function updateEventList(req, res) {
    const {
        body,
        params: { listId },
    } = req;
    const list = await EventList.findByPk(listId);
    if (!list) throw new ErrorResponse('List not found', 404);
    await list.update(req.body);
    await list.save();
    res.json(list);
}

export async function deleteEventList(req, res) {
    const {
        params: { listId },
    } = req;
    const list = await EventList.findByPk(listId);
    if (!list) throw new ErrorResponse('Event not found', 404);
    await list.destroy();
    res.json({ message: 'List deleted' });
}
