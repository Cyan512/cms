/**
 * home-page controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::home-page.home-page', ({ strapi }) => ({
    async find(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: {
                content: {
                    on: {
                        'shared.section-hero': {
                            populate: {
                                image: {
                                    populate: {
                                        src: true
                                    }
                                },
                                links: true
                            }
                        },
                        'shared.section-about': {
                            populate: {
                                image: {
                                    populate: {
                                        src: true
                                    }
                                },
                                link: true
                            }
                        },
                        'home.home-rooms': {
                            populate: {
                                link: true,
                                rooms: {
                                    populate: {
                                        images: {
                                            populate: {
                                                src: true
                                            }
                                        }
                                    },
                                }
                            }
                        },
                        'home.home-services': {
                            populate: {
                                link: true,
                                services: {
                                    populate: {
                                        images: {
                                            populate: {
                                                src: true
                                            }
                                        }
                                    }
                                },
                            }
                        },
                        'home.home-testimonials': {
                            populate: {
                                testimonials: {
                                    populate: true
                                },
                                link: true
                            }
                        },
                        'shared.section-cta': {
                            populate: {
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