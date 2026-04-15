import type { Schema, Struct } from '@strapi/strapi';

export interface HomeHomeAbout extends Struct.ComponentSchema {
  collectionName: 'components_home_home_abouts';
  info: {
    displayName: 'home-about';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
    image: Schema.Attribute.Component<'shared.img', false>;
    link: Schema.Attribute.Component<'shared.link', false>;
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
    links: Schema.Attribute.Component<'shared.link', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 0;
        },
        number
      >;
  };
}

export interface HomeHomeRooms extends Struct.ComponentSchema {
  collectionName: 'components_home_home_rooms';
  info: {
    displayName: 'home-rooms';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
    link: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface HomeHomeServices extends Struct.ComponentSchema {
  collectionName: 'components_home_home_services';
  info: {
    displayName: 'home-services';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
    link: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface HomeHomeTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_home_home_testimonials';
  info: {
    displayName: 'home-testimonials';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
    link: Schema.Attribute.Component<'shared.link', false>;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
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

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedSectionCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_ctas';
  info: {
    displayName: 'section-cta';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
    link: Schema.Attribute.Component<'shared.link', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.home-about': HomeHomeAbout;
      'home.home-hero': HomeHomeHero;
      'home.home-rooms': HomeHomeRooms;
      'home.home-services': HomeHomeServices;
      'home.home-testimonials': HomeHomeTestimonials;
      'shared.header': SharedHeader;
      'shared.hero': SharedHero;
      'shared.img': SharedImg;
      'shared.link': SharedLink;
      'shared.section-cta': SharedSectionCta;
    }
  }
}
