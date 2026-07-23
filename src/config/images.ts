/**
 * Shared page imagery paths.
 * Gallery project photos live in `src/config/gallery.ts`.
 * Some banners and CTAs may still use generic service imagery.
 */
export const images = {
  hero: {
    adelaideCity: "/images/hero/adelaide-city.jpg",
    alt: "View across Adelaide city skyline from a surrounding hillside",
  },
  banners: {
    about: {
      src: "/images/banners/about.jpg",
      alt: "Handyman painting a wall during home renovation and property maintenance work",
    },
    services: {
      src: "/images/banners/services.jpg",
      alt: "Cordless drill on a worksite floor during home repair and renovation work",
    },
    gallery: {
      src: "/images/banners/gallery.jpg",
      alt: "Modern renovated kitchen representing completed home improvement work",
    },
    contact: {
      src: "/images/banners/contact.jpg",
      alt: "Business handshake representing a successful handyman quote conversation",
    },
  },
  about: {
    preview: "/images/placeholders/about-preview.jpg",
    alt: "Handyman and renovation work for property maintenance in Adelaide",
  },
  aboutPage: {
    banner: {
      src: "/images/about/banner.jpg",
      alt: "Handyman reviewing renovation plans for a property maintenance project",
    },
    whoWeAre: {
      src: "/images/about/who-we-are.jpg",
      alt: "Hand sanding a wall during surface preparation for property maintenance",
    },
    whatWeDo: {
      src: "/images/about/what-we-do.jpg",
      alt: "Paint roller and supplies ready for home painting and renovation work",
    },
    imageCta: {
      src: "/images/about/cta.jpg",
      alt: "Handyman using a cordless drill during home repair and assembly work",
    },
    quoteCta: {
      src: "/images/about/quote.jpg",
      alt: "Hammer and nails on timber representing practical handyman repair work",
    },
  },
  localService: {
    preview: "/images/hero/adelaide-city.jpg",
    alt: "Adelaide city skyline representing local handyman and property maintenance coverage",
  },
  services: {
    carpentry: "/images/services/carpentry.jpg",
    painting: "/images/services/painting.jpg",
    tiling: "/images/services/tiling.jpg",
  },
  servicesPage: {
    banner: {
      src: "/images/services-page/banner.jpg",
      alt: "Handyman on a ladder with tools during home repair and plastering work",
    },
    intro: {
      src: "/images/services-page/intro.jpg",
      alt: "Plastering and wall finishing work for home repairs and renovations",
    },
    imageCta: {
      src: "/images/services-page/cta.jpg",
      alt: "Handyman painting during home renovation and property maintenance",
    },
    quoteCta: {
      src: "/images/services-page/quote.jpg",
      alt: "Cordless drill on a worksite floor during handyman repair work",
    },
  },
  galleryPage: {
    banner: {
      src: "/images/banners/gallery.jpg",
      alt: "Modern renovated kitchen representing completed home improvement work",
    },
    intro: {
      src: "/images/gallery/adelaide-handyman-laminate-flooring-installation.jpg",
      alt: "Light oak laminate flooring installed with white skirting in an Adelaide home",
    },
    imageCta: {
      src: "/images/gallery/adelaide-handyman-modern-metal-fence-installation.jpg",
      alt: "Dark charcoal metal fence with lattice top installed at a modern Adelaide home",
    },
    quoteCta: {
      src: "/images/gallery/adelaide-handyman-clothesline-installation.jpg",
      alt: "Fold-down clothesline installed on posts in an Adelaide backyard",
    },
  },
  contactPage: {
    banner: {
      src: "/images/contact/banner.jpg",
      alt: "Hand sanding a wall during preparation for property maintenance work",
    },
    imageCta: {
      src: "/images/contact/cta.jpg",
      alt: "Handyman using a cordless drill during home repair and assembly work",
    },
    quoteCta: {
      src: "/images/contact/quote.jpg",
      alt: "Person using a phone to request a handyman quote",
    },
  },
  projects: {
    propertyMaintenance: "/images/projects/property-maintenance.jpg",
    propertyMaintenanceAlt:
      "Property maintenance and home improvement work in progress",
  },
  imageCta: {
    background: "/images/cta/handyman-workshop.jpg",
    alt: "Organized hand tools on a workshop wall ready for handyman and repair work",
  },
  quoteCta: {
    background: "/images/cta/quote-cta.jpg",
    alt: "Tradesperson painting a wall during home renovation and maintenance work",
  },
  placeholders: {
    project: "/images/placeholders/project-placeholder.jpg",
  },
} as const;
