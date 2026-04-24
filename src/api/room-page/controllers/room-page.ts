/**
 * room-page controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::room-page.room-page', ({ strapi }) => ({
    async find(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: {
                content: {
                    on: {
                        'shared.section-hero': true,
                        'room.room-list':true
                    }
                }
            }
        };

        const { data, meta } = await super.find(ctx);
        return { data, meta };
    }
}));