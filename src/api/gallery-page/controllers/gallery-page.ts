/**
 * gallery-page controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::gallery-page.gallery-page', ({ strapi }) => ({
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
                        'gallery.gallery-filters': {
                            populate: {
                                categories: true,
                            }
                        },
                        'gallery.gallery-grid': {
                            populate: {
                                images: {
                                    populate: {
                                        image: {
                                            populate: {
                                                src: true
                                            }
                                        }
                                    }
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