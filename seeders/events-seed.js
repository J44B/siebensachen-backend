'use strict';

import { faker } from '@faker-js/faker';
import User from '../models/indexModels.js';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'Event',
            [
                {
                    title: faker.lorem.words({ min: 1, max: 3 }),
                    imageUrl: faker.image.urlPicsumPhotos({
                        width: 256,
                        height: 256,
                    }),
                    startDate: faker.date.soon({ days: 5 }),
                    endDate: faker.date.soon({ days: 10 }),
                    genre: faker.lorem.words(1),
                    recurring: faker.datatype.boolean({ probability: 0 }),
                    list_ids: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                },
                {
                    title: faker.lorem.words({ min: 1, max: 3 }),
                    imageUrl: faker.image.urlPicsumPhotos({
                        width: 256,
                        height: 256,
                    }),
                    startDate: faker.date.soon({ days: 5 }),
                    endDate: faker.date.soon({ days: 10 }),
                    genre: faker.lorem.words(1),
                    recurring: faker.datatype.boolean({ probability: 0 }),
                    list_ids: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                },
                {
                    title: faker.lorem.words({ min: 1, max: 3 }),
                    imageUrl: faker.image.urlPicsumPhotos({
                        width: 256,
                        height: 256,
                    }),
                    startDate: faker.date.soon({ days: 5 }),
                    endDate: faker.date.soon({ days: 10 }),
                    genre: faker.lorem.words(1),
                    recurring: faker.datatype.boolean({ probability: 0 }),
                    list_ids: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Event', null, {});
    },
};
