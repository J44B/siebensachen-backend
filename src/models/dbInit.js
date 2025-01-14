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

Category.hasMany(Item, {
    foreignKey: 'category_id',
});
Item.hasOne(Category, { foreignKey: 'category_id' });

SubCategory.hasMany(Item, {
    foreignKey: 'subCategory_id',
});
Item.hasOne(SubCategory, { foreignKey: 'subCategory_id' });

ListItem.belongsTo(Item, { foreignKey: 'item_id' });
Item.hasOne(ListItem, { foreignKey: 'item_id' });

EventList.hasMany(ListItem, { foreignKey: 'list_id' });
ListItem.belongsTo(EventList, { foreignKey: 'list_id' });

await User.sync();
await Event.sync();
await Collaborator.sync();
await EventList.sync();
await Item.sync({ alter: true });
await Category.sync({ alter: true });
await SubCategory.sync({ alter: true });
await ListItem.sync({ alter: true });
