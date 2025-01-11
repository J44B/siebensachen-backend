import sequelize from '../db/db.js';
import { DataTypes } from 'sequelize';

export const SubCategory = sequelize.define('SubCategory', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    icon: {
        type: DataTypes.STRING,
    },
});
