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
                        'shared.section-hero': {
                            populate: {
                                image: {
                                    populate: {
                                        src: true
                                    }
                                }
                            }
                        },
                        'contact.contact-info': true,
                        'contact.contact-form': true,
                        'contact.contact-map': true,
                    }
                }
            }
        };

        const { data, meta } = await super.find(ctx);
        return { data, meta };
    }
}));