/**
 * about-page controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::about-page.about-page', ({ strapi }) => ({
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
                                }
                            }
                        },
                        'about.about-history': {
                            populate: {
                                image: {
                                    populate: {
                                        src: true
                                    }
                                }
                            }
                        },
                        'about.about-philosophy': {
                            populate: {
                                values: {
                                    populate: true
                                }
                            }
                        },
                        'about.about-metrics': {
                            populate: {
                                metrics: {
                                    populate: true
                                }
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