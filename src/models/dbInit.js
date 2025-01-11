import {
    Event,
    Item,
    User,
    EventList,
    ListItem,
    Category,
    SubCategory,
    Collaborator,
} from './indexModels.js';

User.hasMany(Event, { foreignKey: 'owner_id' });
Event.belongsTo(User, { foreignKey: 'owner_id' });

User.hasOne(Collaborator, { foreignKey: 'user_id' });
Collaborator.belongsTo(User, { foreignKey: 'user_id' });

Event.hasMany(EventList, { foreignKey: 'event_id' });
EventList.belongsTo(Event, { foreignKey: 'event_id' });

Event.hasMany(Collaborator, { foreignKey: 'event_id' });

Item.hasOne(Category, { foreignKey: 'item_id' });
Category.belongsToMany(Item, {
    foreignKey: 'item_id',
    through: 'ItemCategory',
});

Item.hasOne(SubCategory, { foreignKey: 'item_id' });
SubCategory.belongsToMany(Item, {
    foreignKey: 'item_id',
    through: 'ItemSubCategory',
});

ListItem.belongsTo(Item, { foreignKey: 'item_id' });
Item.hasOne(ListItem, { foreignKey: 'item_id' });

EventList.hasMany(ListItem, { foreignKey: 'list_id' });
ListItem.belongsTo(EventList, { foreignKey: 'list_id' });

await User.sync();
await Event.sync();
await Collaborator.sync();
await EventList.sync();
await Item.sync();
await Category.sync();
await SubCategory.sync();
await ListItem.sync();
