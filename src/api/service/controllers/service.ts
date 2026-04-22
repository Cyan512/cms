/**
 * service controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::service.service', ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        images: {
          populate: {
            src: true,
          },
        },
      },
    };

    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },
}));