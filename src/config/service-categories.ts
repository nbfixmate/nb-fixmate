export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  serviceSlugs: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "general-repairs",
    title: "General repairs & maintenance",
    description:
      "Everyday handyman support and ongoing property upkeep for homes and businesses.",
    serviceSlugs: [
      "general-handyman-services",
      "property-maintenance",
      "general-home-repairs",
      "door-lock-repairs",
      "plasterboard-repairs",
      "silicone-caulking",
    ],
  },
  {
    id: "renovations-interiors",
    title: "Renovations & interiors",
    description:
      "Practical improvement work for bathrooms, kitchens, flooring, painting, and tiling.",
    serviceSlugs: [
      "bathroom-renovations",
      "kitchen-renovations",
      "painting-decorating",
      "flooring-installation-repairs",
      "tiling-repairs",
    ],
  },
  {
    id: "carpentry-fittings",
    title: "Carpentry, fittings & assembly",
    description:
      "Timber repairs, furniture assembly, shelving, and common household fittings.",
    serviceSlugs: [
      "carpentry-repairs",
      "flat-pack-furniture-assembly",
      "curtain-blind-installation",
      "shelving-wall-mounting",
    ],
  },
  {
    id: "outdoor-exterior",
    title: "Outdoor & exterior",
    description:
      "External maintenance support for decks, fencing, gutters, roofs, and cleaning.",
    serviceSlugs: [
      "deck-repairs-oiling",
      "fencing-gate-repairs",
      "gutter-roof-repairs",
      "pressure-washing",
    ],
  },
  {
    id: "property-types",
    title: "Rental & commercial property support",
    description:
      "Maintenance support tailored to rental properties and commercial premises.",
    serviceSlugs: [
      "rental-property-maintenance",
      "commercial-property-maintenance",
    ],
  },
];
