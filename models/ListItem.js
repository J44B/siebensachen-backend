import sequelize from '../db/db.js';
import { DataTypes } from 'sequelize';

export const ListItem = sequelize.define('ListItem', {
    item_count: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },
});
