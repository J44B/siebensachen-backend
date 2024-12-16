import sequelize from '../db/db.js';
import { DataTypes } from 'sequelize';

export const EventList = sequelize.define('EventList', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    icon: {
        type: DataTypes.STRING,
    },
});
