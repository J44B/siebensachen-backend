import { Event, Items, User } from '../models/indexModels.js';

User.hasMany(Event, {
    foreignKey: 'owner_id',
});

Event.belongsTo(User, {
    foreignKey: 'owner_id',
});

await User.sync();
await Event.sync();
