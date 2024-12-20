import sequelize from '../db/db.js';
import { DataTypes } from 'sequelize';

export const Category = sequelize.define('Category', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    icon: {
        type: DataTypes.STRING,
    },
});
