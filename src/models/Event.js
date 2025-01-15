import sequelize from '../db/db.js';
import { DataTypes } from 'sequelize';

export const Event = sequelize.define('Event', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
    },
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    nights: {
        type: DataTypes.INTEGER,
    },
    recurring: {
        type: DataTypes.BOOLEAN,
    },
    recurrence_pattern: {
        type: DataTypes.STRING,
    },
});
