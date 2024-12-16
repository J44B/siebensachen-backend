'use strict';

import { faker } from '@faker-js/faker';
import ItemCategory from '../models/indexModels.js';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'ItemCategory',
            [
                {
                    item_id: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                    category_id: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                },
                {
                    item_id: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                    category_id: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                },
                {
                    item_id: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                    category_id: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                },
                {
                    item_id: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                    category_id: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                },
                {
                    item_id: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                    category_id: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('ItemCategory', null, {});
    },
};
