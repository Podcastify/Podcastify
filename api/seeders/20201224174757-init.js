'use strict';
const bcrypt = require('bcrypt');

module.exports = {
    up: async (queryInterface) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert(
            'users',
            [
                {
                    username: 'john',
                    password: bcrypt.hashSync('john', 10),
                },
                {
                    username: 'bill',
                    password: bcrypt.hashSync('bill', 10),
                },
            ],
            {underscored: true}
        );

        await queryInterface.bulkInsert('subscriptions', [
            {
                user_id: 1,
                podcast_id: 'Podcastno1',
            },
            {
                user_id: 1,
                podcast_id: 'Podcastno2',
            },
            {
                user_id: 2,
                podcast_id: 'Podcastno1',
            },
        ]);

        await queryInterface.bulkInsert('podcasts', [
            {
                id: 'Podcastno1',
            },
            {
                id: 'Podcastno2',
            },
        ]);

        await queryInterface.bulkInsert('playlists', [
            {
                user_id: 1,
                name: 'my fav',
            },
            {
                user_id: 2,
                name: 'this is dope',
            },
        ]);

        await queryInterface.bulkInsert('episodes', [
            {id: 'Epno1'},
            {id: 'Epno2'},
            {id: 'Epno3'},
            {id: 'Epno4'},
            {id: 'Epno5'},
        ]);

        await queryInterface.bulkInsert('playlist_episode', [
            {
                playlist_id: 1,
                episode_id: 'Epno2',
            },
            {
                playlist_id: 1,
                episode_id: 'Epno3',
            },
            {
                playlist_id: 1,
                episode_id: 'Epno1',
            },
            {
                playlist_id: 2,
                episode_id: 'Epno2',
            },
            {
                playlist_id: 2,
                episode_id: 'Epno4',
            },
            {
                playlist_id: 1,
                episode_id: 'Epno5',
            },
            {
                playlist_id: 2,
                episode_id: 'Epno1',
            },
            {
                playlist_id: 2,
                episode_id: 'Epno3',
            },
            {
                playlist_id: 1,
                episode_id: 'Epno4',
            },
        ]);

        await queryInterface.bulkInsert('records', [
            {
                user_id: 1,
                episode_id: 'Epno5',
                progress: 56,
            },
            {
                user_id: 1,
                episode_id: 'Epno2',
                progress: 56,
            },
            {
                user_id: 1,
                episode_id: 'Epno4',
                progress: 56,
            },
            {
                user_id: 1,
                episode_id: 'Epno3',
                progress: 56,
            },
            {
                user_id: 1,
                episode_id: 'Epno1',
                progress: 56,
            },
            {
                user_id: 2,
                episode_id: 'Epno5',
                progress: 56,
            },
            {
                user_id: 2,
                episode_id: 'Epno1',
                progress: 56,
            },
            {
                user_id: 2,
                episode_id: 'Epno3',
                progress: 56,
            },
            {
                user_id: 2,
                episode_id: 'Epno2',
                progress: 56,
            },
        ]);
    },

    down: async () => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
