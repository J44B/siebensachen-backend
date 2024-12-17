import {
    Event,
    Item,
    User,
    EventList,
    ListItem,
    Category,
} from './indexModels.js';

User.hasMany(Event);

Event.belongsTo(User, { foreignKey: 'owner_id' });

Event.hasMany(EventList);

EventList.belongsTo(Event);

Item.hasMany(Category);

Category.belongsToMany(Item, { through: 'ItemCategory' });

EventList.hasMany(Item);

Item.belongsToMany(EventList, { through: 'ListItem' });

ListItem.hasMany(Item);

ListItem.belongsTo(ListItem, {
    foreignKey: 'list_id',
    foreignKey: 'item_id',
});

EventList.hasMany(ListItem, {
    foreignKey: 'list_id',
    foreignKey: 'item_id',
});

await User.sync({ force: true });
await Event.sync({ force: true });
await EventList.sync({ force: true });
await Item.sync({ force: true });
await Category.sync({ force: true });
// await ListItem.sync({ force: true });
