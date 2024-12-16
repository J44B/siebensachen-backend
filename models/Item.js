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
    user_id: {
        type: DataTypes.INTEGER, // Associate with user_id. If "-1" then it's a default item not added by a user
    },
});
