import sequelize from '../db/db.js';

export const ItemCategory = sequelize.define('ItemCategory', {
    timestamps: false,
});
