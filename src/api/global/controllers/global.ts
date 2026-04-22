/**
 * global controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::global.global', ({ strapi }) => ({
    async find(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: {
                branding: {
                    populate: {
                        logo: {
                            populate: {
                                src: true,
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