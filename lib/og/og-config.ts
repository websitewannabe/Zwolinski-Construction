export interface OgPageConfig {
  title: string;
  meta: string;
  background: string;
}

export interface OgConfig {
  default: OgPageConfig;
  services: Record<string, OgPageConfig>;
  pages: Record<string, OgPageConfig>;
  cities: { meta: string; background: string };
}

const BG = {
  default: "/images/projects/constructionHero.jpg",
  bathroom: "/images/gallery/bathrooms/newBathroom2.jpg",
  kitchen: "/images/gallery/kitchens/IMG_6094.jpg",
  basement: "/images/gallery/basements/IMG_0227.JPG",
  about: "/images/projects/aboutLivingRoom.jpg",
  gallery: "/images/gallery/bathrooms/newBathroom2.jpg",
};

const META = "Bucks County, PA";

export const ogConfig: OgConfig = {
  default: {
    title: "Zwolinski Quality Construction",
    meta: "Expert Remodeling in Bucks County, PA",
    background: BG.default,
  },

  services: {
    "basement-remodeling": {
      title: "Basement Remodeling",
      meta: META,
      background: BG.basement,
    },
    "bathroom-remodeling": {
      title: "Bathroom Remodeling",
      meta: META,
      background: BG.bathroom,
    },
    "kitchen-remodeling": {
      title: "Kitchen Remodeling",
      meta: META,
      background: BG.kitchen,
    },
  },

  pages: {
    about: {
      title: "About Our Company",
      meta: "25+ Years of Quality Craftsmanship",
      background: BG.about,
    },
    contact: {
      title: "Contact Us",
      meta: "Request a Free Quote Today",
      background: BG.default,
    },
    gallery: {
      title: "Our Work",
      meta: "See Our Completed Projects",
      background: BG.gallery,
    },
    services: {
      title: "Our Services",
      meta: "Kitchen, Bathroom & Basement Remodeling",
      background: BG.default,
    },
    reviews: {
      title: "Customer Reviews",
      meta: "See What Our Clients Are Saying",
      background: BG.default,
    },
    cities: {
      title: "Service Areas",
      meta: "Serving Bucks, Montgomery & Lehigh Counties",
      background: BG.default,
    },
    privacy: {
      title: "Privacy Policy",
      meta: "Zwolinski Quality Construction",
      background: BG.default,
    },
    accessibility: {
      title: "Accessibility",
      meta: "Zwolinski Quality Construction",
      background: BG.default,
    },
    "site-credits": {
      title: "Site Credits",
      meta: "Built by Website Wannabe",
      background: BG.default,
    },
    faq: {
      title: "Frequently Asked Questions",
      meta: "Answers About Our Remodeling Services",
      background: BG.default,
    },
    blog: {
      title: "Our Blog",
      meta: "Expert Remodeling Insights & Tips",
      background: BG.default,
    },
  },

  cities: {
    meta: "Serving Bucks County, PA",
    background: BG.default,
  },
};

/** Format a slug like "doylestown" → "Doylestown" or "new-hope" → "New Hope" */
export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Resolve config for a service slug, falling back to defaults. */
export function getServiceOgConfig(slug: string): OgPageConfig {
  return (
    ogConfig.services[slug] ?? {
      title: slugToTitle(slug),
      meta: ogConfig.default.meta,
      background: ogConfig.default.background,
    }
  );
}

/** Resolve config for a named page. */
export function getPageOgConfig(slug: string): OgPageConfig {
  return (
    ogConfig.pages[slug] ?? {
      title: slugToTitle(slug),
      meta: ogConfig.default.meta,
      background: ogConfig.default.background,
    }
  );
}
