import { Event, User } from '../models/indexModels.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export async function getAllEvents(req, res) {
    const events = await Event.findAll({
        include: { model: User, attributes: ['firstName'] },
    });
    if (!events.length) throw new ErrorResponse('No event found', 404);
    res.json(events);
}

export async function getEventById(req, res) {
    const {
        params: { id },
    } = req;
    const event = await Event.findByPk(id, {
        include: { model: User, attributes: ['firstName'] },
    });
    console.log('LOG EVENT FROM EVENT CONTROLLER:', event);
    res.json(event);
}

export async function createEvent(req, res) {
    const { body, uid } = req;
    const newEvent = await Event.create({ ...body, owner_id: uid });
    res.status(201).send({ newEvent });
}

export async function updateEvent(req, res) {
    const {
        body,
        params: { id },
    } = req;
    const event = await Event.findByPk(id);
    if (!event) throw new ErrorResponse('Event not found', 404);
    await event.update(req.body);
    await event.save();
    res.json(event);
}

export async function deleteEvent(req, res) {
    const {
        params: { id },
    } = req;
    const event = await Event.findByPk(id);
    if (!event) throw new ErrorResponse('Event not found', 404);
    await event.destroy();
    res.json({ message: 'Event deleted' });
}
