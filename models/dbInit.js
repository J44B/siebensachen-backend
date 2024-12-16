import { Event, Item, User, EventList } from './indexModels.js';

User.hasMany(Event, {
    foreignKey: 'owner_id',
});

Event.belongsTo(User, {
    foreignKey: 'owner_id',
});

EventList.belongsTo(Event, {
    foreignKey: 'event_id',
});

Event.hasMany(EventList, {
    foreignKey: 'event_id',
});

await User.sync();
await Event.sync();
await EventList.sync();
