import sequelize from '../db/db.js';
import { DataTypes } from 'sequelize';

export const Item = sequelize.define('Items', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    icon: {
        type: DataTypes.STRING,
    },
    isDefault: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // if "true" then the item must not be deletable in the items list
    },
});
