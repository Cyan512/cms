import type { Schema, Struct } from '@strapi/strapi';

export interface HomeHomeFeaturedRooms extends Struct.ComponentSchema {
  collectionName: 'components_home_home_featured_rooms';
  info: {
    displayName: 'home-featured-rooms';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
  };
}

export interface HomeHomeGastronomy extends Struct.ComponentSchema {
  collectionName: 'components_home_home_gastronomies';
  info: {
    displayName: 'home-gastronomy';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
    image: Schema.Attribute.Component<'shared.img', false>;
  };
}

export interface HomeHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_home_heroes';
  info: {
    displayName: 'home-hero';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
    image: Schema.Attribute.Component<'shared.img', false>;
  };
}

export interface HomeHomePhilosophy extends Struct.ComponentSchema {
  collectionName: 'components_home_home_philosophies';
  info: {
    displayName: 'home-philosophy';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
    image: Schema.Attribute.Component<'shared.img', false>;
  };
}

export interface HomeHomeServices extends Struct.ComponentSchema {
  collectionName: 'components_home_home_services';
  info: {
    displayName: 'home-services';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
  };
}

export interface HomeHomeTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_home_home_testimonials';
  info: {
    displayName: 'home-testimonials';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    image: Schema.Attribute.Component<'shared.img', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedImg extends Struct.ComponentSchema {
  collectionName: 'components_shared_imgs';
  info: {
    displayName: 'img';
  };
  attributes: {
    alt: Schema.Attribute.String;
    src: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedSectionCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_ctas';
  info: {
    displayName: 'section-cta';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.home-featured-rooms': HomeHomeFeaturedRooms;
      'home.home-gastronomy': HomeHomeGastronomy;
      'home.home-hero': HomeHomeHero;
      'home.home-philosophy': HomeHomePhilosophy;
      'home.home-services': HomeHomeServices;
      'home.home-testimonials': HomeHomeTestimonials;
      'shared.header': SharedHeader;
      'shared.hero': SharedHero;
      'shared.img': SharedImg;
      'shared.section-cta': SharedSectionCta;
    }
  }
}
