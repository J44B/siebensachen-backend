import sequelize from '../db/db.js';
import { DataTypes } from 'sequelize';

export const User = sequelize.define('User', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    hashed_password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    avatar_url: {
        type: DataTypes.STRING,
    },
});
