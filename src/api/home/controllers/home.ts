/**
 * home controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::home.home', ({ strapi }) => ({
    async find(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: {
                content: {
                    on: {
                        'home.home-hero': {
                            populate: {
                                header: true,
                                image: {
                                    populate: {
                                        src: true
                                    }
                                }
                            }
                        },
                        'home.home-about': {
                            populate: {
                                header: true,
                                image: {
                                    populate: {
                                        src: true
                                    }
                                }
                            }
                        },
                        'home.home-rooms': {
                            populate: {
                                header: true
                            }
                        },
                        'home.home-services': {
                            populate: {
                                header: true
                            }
                        },
                        'home.home-testimonials': {
                            populate: {
                                header: true
                            }
                        },
                        'shared.section-cta': {
                            populate: {
                                header: true
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