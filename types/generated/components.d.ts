import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAboutMetrics extends Struct.ComponentSchema {
  collectionName: 'components_about_about_metrics';
  info: {
    displayName: 'about-metrics';
  };
  attributes: {
    metrics: Schema.Attribute.Component<'shared.section-metrics', true>;
  };
}

export interface AboutAboutPhilosophy extends Struct.ComponentSchema {
  collectionName: 'components_about_about_philosophies';
  info: {
    displayName: 'about-philosophy';
  };
  attributes: {
    values: Schema.Attribute.Component<'shared.value', true>;
  };
}

export interface GalleryGalleryList extends Struct.ComponentSchema {
  collectionName: 'components_gallery_gallery_lists';
  info: {
    displayName: 'gallery-list';
  };
  attributes: {
    images: Schema.Attribute.Component<'shared.img', true>;
  };
}

export interface HomeHomeRooms extends Struct.ComponentSchema {
  collectionName: 'components_home_home_rooms';
  info: {
    displayName: 'home-rooms';
  };
  attributes: {
    link: Schema.Attribute.Component<'shared.link', false>;
    rooms: Schema.Attribute.Relation<'oneToMany', 'api::room.room'>;
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

export interface RoomRoomList extends Struct.ComponentSchema {
  collectionName: 'components_room_room_lists';
  info: {
    displayName: 'room-list';
  };
  attributes: {};
}

export interface ServiceServiceList extends Struct.ComponentSchema {
  collectionName: 'components_service_service_lists';
  info: {
    displayName: 'service-list';
  };
  attributes: {};
}

export interface SharedBranding extends Struct.ComponentSchema {
  collectionName: 'components_shared_brandings';
  info: {
    displayName: 'branding';
  };
  attributes: {
    footerText: Schema.Attribute.Text;
    logo: Schema.Attribute.Component<'shared.img', false>;
    siteName: Schema.Attribute.String;
  };
}

export interface SharedContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_infos';
  info: {
    displayName: 'contact-info';
  };
  attributes: {
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
    whatsapp: Schema.Attribute.String;
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
    text: Schema.Attribute.Text;
    type: Schema.Attribute.Enumeration<['primary', 'secondary', 'link']> &
      Schema.Attribute.DefaultTo<'primary'>;
    url: Schema.Attribute.Text;
  };
}

export interface SharedLocationInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_location_infos';
  info: {
    displayName: 'location-info';
  };
  attributes: {
    address: Schema.Attribute.Text;
    googleMapsUrl: Schema.Attribute.String;
    latitude: Schema.Attribute.Decimal;
    longitude: Schema.Attribute.Decimal;
  };
}

export interface SharedSectionAbout extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_abouts';
  info: {
    displayName: 'section-about';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'shared.img', false>;
    link: Schema.Attribute.Component<'shared.link', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface SharedSectionContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_contacts';
  info: {
    displayName: 'section-contact';
  };
  attributes: {};
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

export interface SharedSectionMap extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_maps';
  info: {
    displayName: 'section-map';
  };
  attributes: {};
}

export interface SharedSectionMetrics extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_metrics';
  info: {
    displayName: 'metric';
  };
  attributes: {
    label: Schema.Attribute.Text;
    more: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    number: Schema.Attribute.Decimal;
  };
}

export interface SharedSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'social-links';
  };
  attributes: {
    facebook: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    tiktok: Schema.Attribute.String;
  };
}

export interface SharedValue extends Struct.ComponentSchema {
  collectionName: 'components_shared_values';
  info: {
    displayName: 'value';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about-metrics': AboutAboutMetrics;
      'about.about-philosophy': AboutAboutPhilosophy;
      'gallery.gallery-list': GalleryGalleryList;
      'home.home-rooms': HomeHomeRooms;
      'home.home-services': HomeHomeServices;
      'home.home-testimonials': HomeHomeTestimonials;
      'room.room-list': RoomRoomList;
      'service.service-list': ServiceServiceList;
      'shared.branding': SharedBranding;
      'shared.contact-info': SharedContactInfo;
      'shared.gallery-category': SharedGalleryCategory;
      'shared.gallery-image': SharedGalleryImage;
      'shared.img': SharedImg;
      'shared.link': SharedLink;
      'shared.location-info': SharedLocationInfo;
      'shared.section-about': SharedSectionAbout;
      'shared.section-contact': SharedSectionContact;
      'shared.section-cta': SharedSectionCta;
      'shared.section-hero': SharedSectionHero;
      'shared.section-map': SharedSectionMap;
      'shared.section-metrics': SharedSectionMetrics;
      'shared.social-links': SharedSocialLinks;
      'shared.value': SharedValue;
    }
  }
}
