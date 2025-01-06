import { User, Event } from '../models/indexModels.js';
import ErrorResponse from '../utils/ErrorResponse.js';

/* 

Todos

Create event
Get events from user
Delete event

*/

export async function createEvent(req, res) {
    const { title, imageUrl, startDate, endDate } = req.body;
    event.owner_id = req.userId;
    const newEvent = await Event.create({
        title,
        imageUrl,
        startDate,
        endDate,
    });
    res.status(201).send({ newEvent });
}
