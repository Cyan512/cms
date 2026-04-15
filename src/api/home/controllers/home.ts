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
                                },
                                links: true
                            }
                        },
                        'home.home-about': {
                            populate: {
                                header: true,
                                image: {
                                    populate: {
                                        src: true
                                    }
                                },
                                link:true
                            }
                        },
                        'home.home-rooms': {
                            populate: {
                                header: true,
                                link:true
                            }
                        },
                        'home.home-services': {
                            populate: {
                                header: true,
                                link:true
                            }
                        },
                        'home.home-testimonials': {
                            populate: {
                                header: true,
                                testimonials: {
                                    populate: true
                                },
                                link:true
                            }
                        },
                        'shared.section-cta': {
                            populate: {
                                header: true,
                                link:true
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