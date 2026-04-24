/**
 * contact-page controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::contact-page.contact-page', ({ strapi }) => ({
    async find(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: {
                content: {
                    on: {
                        'shared.section-hero': true,
                        'contact.contact-info': true,
                    }
                }
            }
        };

        const { data, meta } = await super.find(ctx);
        return { data, meta };
    }
}));