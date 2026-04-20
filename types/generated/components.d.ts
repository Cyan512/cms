import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAboutHistory extends Struct.ComponentSchema {
  collectionName: 'components_about_about_histories';
  info: {
    displayName: 'about-history';
  };
  attributes: {
    description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface AboutAboutLocation extends Struct.ComponentSchema {
  collectionName: 'components_about_about_locations';
  info: {
    displayName: 'about-location';
  };
  attributes: {
    address: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    googleMapsUrl: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutAboutPhilosophy extends Struct.ComponentSchema {
  collectionName: 'components_about_about_philosophies';
  info: {
    displayName: 'about-philosophy';
  };
  attributes: {
    description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    values: Schema.Attribute.Component<'shared.value', true>;
  };
}

export interface ContactContactForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_forms';
  info: {
    displayName: 'contact-form';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContactContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_infos';
  info: {
    displayName: 'contact-info';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.String;
    openingHours: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContactContactMap extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_maps';
  info: {
    displayName: 'contact-map';
  };
  attributes: {
    embedUrl: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface GalleryGalleryFilters extends Struct.ComponentSchema {
  collectionName: 'components_gallery_gallery_filters';
  info: {
    displayName: 'gallery-filters';
  };
  attributes: {
    categories: Schema.Attribute.Component<'shared.gallery-category', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GalleryGalleryGrid extends Struct.ComponentSchema {
  collectionName: 'components_gallery_gallery_grids';
  info: {
    displayName: 'gallery-grid';
  };
  attributes: {
    images: Schema.Attribute.Component<'shared.gallery-image', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeAbout extends Struct.ComponentSchema {
  collectionName: 'components_home_home_abouts';
  info: {
    displayName: 'home-about';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'shared.img', false>;
    link: Schema.Attribute.Component<'shared.link', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface HomeHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_home_heroes';
  info: {
    displayName: 'home-hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'shared.img', false>;
    links: Schema.Attribute.Component<'shared.link', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 0;
        },
        number
      >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface HomeHomeRooms extends Struct.ComponentSchema {
  collectionName: 'components_home_home_rooms';
  info: {
    displayName: 'home-rooms';
  };
  attributes: {
    link: Schema.Attribute.Component<'shared.link', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface HomeHomeServices extends Struct.ComponentSchema {
  collectionName: 'components_home_home_services';
  info: {
    displayName: 'home-services';
  };
  attributes: {
    link: Schema.Attribute.Component<'shared.link', false>;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface HomeHomeTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_home_home_testimonials';
  info: {
    displayName: 'home-testimonials';
  };
  attributes: {
    link: Schema.Attribute.Component<'shared.link', false>;
    subtitle: Schema.Attribute.Text;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    title: Schema.Attribute.Text;
  };
}

export interface SharedGalleryCategory extends Struct.ComponentSchema {
  collectionName: 'components_shared_gallery_categories';
  info: {
    displayName: 'gallery-category';
  };
  attributes: {
    name: Schema.Attribute.String;
    slug: Schema.Attribute.String;
  };
}

export interface SharedGalleryImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_gallery_images';
  info: {
    displayName: 'gallery-image';
  };
  attributes: {
    category: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared.img', false>;
  };
}

export interface SharedImg extends Struct.ComponentSchema {
  collectionName: 'components_shared_imgs';
  info: {
    displayName: 'img';
  };
  attributes: {
    alt: Schema.Attribute.Text;
    src: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary', 'link']> &
      Schema.Attribute.DefaultTo<'primary'>;
    url: Schema.Attribute.Text;
  };
}

export interface SharedSectionCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_ctas';
  info: {
    displayName: 'section-cta';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'shared.link', false> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 0;
        },
        number
      >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface SharedSectionHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_heroes';
  info: {
    displayName: 'section-hero';
  };
  attributes: {
    image: Schema.Attribute.Component<'shared.img', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface SharedValue extends Struct.ComponentSchema {
  collectionName: 'components_shared_values';
  info: {
    displayName: 'value';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about-history': AboutAboutHistory;
      'about.about-location': AboutAboutLocation;
      'about.about-philosophy': AboutAboutPhilosophy;
      'contact.contact-form': ContactContactForm;
      'contact.contact-info': ContactContactInfo;
      'contact.contact-map': ContactContactMap;
      'gallery.gallery-filters': GalleryGalleryFilters;
      'gallery.gallery-grid': GalleryGalleryGrid;
      'home.home-about': HomeHomeAbout;
      'home.home-hero': HomeHomeHero;
      'home.home-rooms': HomeHomeRooms;
      'home.home-services': HomeHomeServices;
      'home.home-testimonials': HomeHomeTestimonials;
      'shared.gallery-category': SharedGalleryCategory;
      'shared.gallery-image': SharedGalleryImage;
      'shared.img': SharedImg;
      'shared.link': SharedLink;
      'shared.section-cta': SharedSectionCta;
      'shared.section-hero': SharedSectionHero;
      'shared.value': SharedValue;
    }
  }
}
