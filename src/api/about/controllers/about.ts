/**
 * about controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::about.about', ({ strapi }) => ({
    async find(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: {
                content: {
                    on: {
                        'shared.section-hero': {
                            populate: {
                                header: true,
                                image: {
                                    populate: {
                                        src: true
                                    }
                                },
                            }
                        },
                        'about.about-story': {
                            populate: {
                                header: true,
                                image: {
                                    populate: {
                                        src: true
                                    }
                                },
                                stats: true,
                                values: true,
                            }
                        },
                        'shared.section-cta': {
                            populate: {
                                header: true,
                                link: true
                            }
                        }
                    }
                }
            }
        };
        const { data, meta } = await super.find(ctx);
        return { data, meta };
    }
}));