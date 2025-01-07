import { Event, User } from '../models/indexModels.js';
import ErrorResponse from '../utils/ErrorResponse.js';

/* 

Todos

Create event [x]
Get all events []
Get single event []
Update event []
Delete event []

*/

export async function getAllEvents(req, res) {
    const events = await Event.findAll({
        include: { model: User, attributes: ['firstName'] },
    });
    if (!events.length) throw new ErrorResponse('No event found', 404);
    res.json(events);
}

export async function createEvent(req, res) {
    const { body, uid } = req;
    const newEvent = await Event.create({ ...body, owner_id: uid });
    res.status(201).send({ newEvent });
}
