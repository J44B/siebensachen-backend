import { User, Event } from '../models/indexModels.js';
import ErrorResponse from '../utils/ErrorResponse.js';

/* 

Todos

Create event
Get events from user
Get single event
Delete event

*/

export async function createEvent(req, res) {
    const { body, uid } = req;
    const newEvent = await Event.create({ ...body, owner_id: uid });
    res.status(201).send({ newEvent });
}
