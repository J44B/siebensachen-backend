import sequelize from '../db/db.js';
import { DataTypes } from 'sequelize';

export const ListItem = sequelize.define('ListItem', {
    isChecked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
});
