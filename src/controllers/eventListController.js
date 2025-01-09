import { Event, EventList } from '../models/indexModels.js';
import ErrorResponse from '../utils/ErrorResponse.js';

/* 

Todos

Create eventList []
Get all eventLists []
Get single eventList []
Update eventList []
Delete eventList []

*/

export async function getAllEventLists(req, res) {}

export async function getEventListById(req, res) {}

export async function createEventList(req, res) {
    const {
        body,
        params: { eventId },
    } = req;

    console.log('ID: ', req.params.id);
    const event = await Event.findByPk(eventId);
    if (!event) throw new ErrorResponse('Event not found', 404);
    const newList = await EventList.create({ ...body, event_id: eventId });
    res.status(201).json({ newList });
}

export async function updateEventList(req, res) {}

export async function deleteEventList(req, res) {}
