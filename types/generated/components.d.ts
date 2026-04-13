import type { Schema, Struct } from '@strapi/strapi';

export interface HomeHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_home_heroes';
  info: {
    displayName: 'home-hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'shared.img', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.Text;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.home-hero': HomeHomeHero;
      'shared.img': SharedImg;
    }
  }
}
