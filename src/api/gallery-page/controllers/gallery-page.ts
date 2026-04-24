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
                        'shared.section-hero': true,
                        'gallery.gallery-list': {
                            populate: {
                                images: {
                                    populate: {
                                        src: true
                                    }
                                }
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