import {
    Event,
    Item,
    User,
    EventList,
    ListItem,
    Category,
    ItemCategory,
} from './indexModels.js';

User.hasMany(Event, {
    foreignKey: 'owner_id',
});

Event.belongsTo(User, {
    foreignKey: 'owner_id',
});

EventList.belongsTo(Event, {
    foreignKey: 'event_id',
});

EventList.hasMany(ListItem, {
    foreignKey: 'list_id',
    foreignKey: 'item_id',
});

ListItem.belongsTo(EventList, {
    foreignKey: 'list_id',
    foreignKey: 'item_id',
});

Event.hasMany(EventList, {
    foreignKey: 'event_id',
});

Item.belongsToMany(EventList, { through: ListItem });

Category.belongsToMany(Item, { through: ItemCategory });

await User.sync();
await Event.sync();
await Item.sync();
await EventList.sync();
await Category.sync();

// await ListItem.sync(); // ListItem is undefined in the current state of development!
// await ItemCategory.sync(); // ItemCategory is undefined in the current state of development!
