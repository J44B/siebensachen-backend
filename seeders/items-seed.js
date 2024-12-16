'use strict';

import { faker } from '@faker-js/faker';
import Item from '../models/indexModels.js';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'Item',
            [
                {
                    title: faker.word.noun({ length: { min: 5, max: 12 } }),
                    icon: faker.image.urlPicsumPhotos({
                        width: 64,
                        height: 64,
                    }),
                    user_id: faker.helpers.arrayElements([-1, 1, 2, 3, 4]),
                },
                {
                    title: faker.word.noun({ length: { min: 5, max: 12 } }),
                    icon: faker.image.urlPicsumPhotos({
                        width: 64,
                        height: 64,
                    }),
                    user_id: faker.helpers.arrayElements([-1, 1, 2, 3, 4]),
                },
                {
                    title: faker.word.noun({ length: { min: 5, max: 12 } }),
                    icon: faker.image.urlPicsumPhotos({
                        width: 64,
                        height: 64,
                    }),
                    user_id: faker.helpers.arrayElements([-1, 1, 2, 3, 4]),
                },
                {
                    title: faker.word.noun({ length: { min: 5, max: 12 } }),
                    icon: faker.image.urlPicsumPhotos({
                        width: 64,
                        height: 64,
                    }),
                    user_id: faker.helpers.arrayElements([-1, 1, 2, 3, 4]),
                },
                {
                    title: faker.word.noun({ length: { min: 5, max: 12 } }),
                    icon: faker.image.urlPicsumPhotos({
                        width: 64,
                        height: 64,
                    }),
                    user_id: faker.helpers.arrayElements([-1, 1, 2, 3, 4]),
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Item', null, {});
    },
};
