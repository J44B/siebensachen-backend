'use strict';

import { faker } from '@faker-js/faker';
import Category from '../models/indexModels.js';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'Category',
            [
                {
                    title: faker.word.noun({ length: { min: 5, max: 12 } }),
                    icon: faker.image.urlPicsumPhotos({
                        width: 64,
                        height: 64,
                    }),
                },
                {
                    title: faker.word.noun({ length: { min: 5, max: 12 } }),
                    icon: faker.image.urlPicsumPhotos({
                        width: 64,
                        height: 64,
                    }),
                },
                {
                    title: faker.word.noun({ length: { min: 5, max: 12 } }),
                    icon: faker.image.urlPicsumPhotos({
                        width: 64,
                        height: 64,
                    }),
                },
                {
                    title: faker.word.noun({ length: { min: 5, max: 12 } }),
                    icon: faker.image.urlPicsumPhotos({
                        width: 64,
                        height: 64,
                    }),
                },
                {
                    title: faker.word.noun({ length: { min: 5, max: 12 } }),
                    icon: faker.image.urlPicsumPhotos({
                        width: 64,
                        height: 64,
                    }),
                },
                {
                    title: faker.word.noun({ length: { min: 5, max: 12 } }),
                    icon: faker.image.urlPicsumPhotos({
                        width: 64,
                        height: 64,
                    }),
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Category', null, {});
    },
};
