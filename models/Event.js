import sequelize from '../db/db.js';
import { DataTypes } from 'sequelize';
import Op from 'sequelize';

export const Event = sequelize.define('Event', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
    },
    startDate: {
        type: DataTypes.DATE(DataTypes.DATEONLY),
        allowNull: false,
    },
    endDate: {
        type: DataTypes.DATE(DataTypes.DATEONLY),
        allowNull: false,
    },
    nights: {
        type: DataTypes.INTEGER(endDate - startDate),
    },
    recurring: {
        type: DataTypes.BOOLEAN,
    },
    recurrence_pattern: {
        type: DataTypes.STRING,
    },
    list_ids: {
        type: DataTypes.ARRAY, // Array of list_ids in the specific event
    },
});
