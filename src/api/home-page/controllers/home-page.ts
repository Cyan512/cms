/**
 * home-page controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::home-page.home-page', () => ({
    async find(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: {
                content: {
                    on: {
                        'shared.section-hero': true,
                        'shared.section-about': true,

                        'home.home-rooms': {
                            populate: {
                                rooms: {
                                    populate: {
                                        images: true,
                                    },
                                },
                            },
                        },

                        'home.home-services': {
                            populate: {
                                services: {
                                    populate: {
                                        image: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        };

        const { data, meta } = await super.find(ctx);
        return { data, meta };
    },
}));