import { Event } from '../models/indexModels.js';
import ErrorResponse from '../utils/ErrorResponse.js';

/* 

Todos

Create event
Get events from user
Delete event

*/

export async function createEvent() {
    const { title, imageUrl, startDate, endDate, nights } = req.body;
    const newEvent = Event.create({
        title,
        imageUrl,
        startDate,
        endDate,
        nights,
    });
    res.status(201).send({ newEvent });
}
