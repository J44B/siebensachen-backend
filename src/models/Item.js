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
});
