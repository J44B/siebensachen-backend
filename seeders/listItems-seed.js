'use strict';

import { faker } from '@faker-js/faker';
import ListItem from '../models/indexModels.js';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'ListItem',
            [
                {
                    list_id: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                    item_id: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                    item_count: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                },
                {
                    list_id: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                    item_id: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                    item_count: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                },
                {
                    list_id: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                    item_id: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                    item_count: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                },
                {
                    list_id: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                    item_id: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                    item_count: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                },
                {
                    list_id: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                    item_id: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                    item_count: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('ListItem', null, {});
    },
};
