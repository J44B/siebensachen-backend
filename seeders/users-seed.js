'use strict';

import { faker } from '@faker-js/faker';
import User from '../models/indexModels.js';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'User',
            [
                {
                    first_name: faker.person.firstName(),
                    last_name: faker.person.lastName(),
                    user_name: faker.person.user_name(),
                    email: faker.internet.email(),
                    hashed_password: faker.internet.password({
                        length: 1,
                        memorable: true,
                        pattern: /[1]/,
                    }),
                    avatar_url: faker.image.avatar(),
                },
                {
                    first_name: faker.person.firstName(),
                    last_name: faker.person.lastName(),
                    user_name: faker.person.user_name(),
                    email: faker.internet.email(),
                    hashed_password: faker.internet.password({
                        length: 1,
                        memorable: true,
                        pattern: /[1]/,
                    }),
                    avatar_url: faker.image.avatar(),
                },
                {
                    first_name: faker.person.firstName(),
                    last_name: faker.person.lastName(),
                    user_name: faker.person.user_name(),
                    email: faker.internet.email(),
                    hashed_password: faker.internet.password({
                        length: 1,
                        memorable: true,
                        pattern: /[1]/,
                    }),
                    avatar_url: faker.image.avatar(),
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Event', null, {});
    },
};
