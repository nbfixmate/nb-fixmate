export interface GalleryItem {
  title: string;
  category: string;
  alt: string;
  image: string;
}

/**
 * Stock imagery representing service types only.
 * Replace with authentic NB Fixmate project photos before a trust-focused launch.
 */
export const galleryItems: GalleryItem[] = [
  {
    title: "Carpentry & timber repairs",
    category: "Carpentry",
    alt: "Cordless drill on a timber work surface during carpentry work",
    image: "/images/gallery/carpentry.jpg",
  },
  {
    title: "Interior painting prep",
    category: "Painting",
    alt: "Painting tools and drop cloths prepared for an interior paint job",
    image: "/images/gallery/painting.jpg",
  },
  {
    title: "Painting & decorating",
    category: "Painting",
    alt: "Handyman painting a wall during home renovation work",
    image: "/images/gallery/painting-work.jpg",
  },
  {
    title: "Tiling & bathroom finishes",
    category: "Tiling",
    alt: "Finished tiled bathroom representing tiling and renovation work",
    image: "/images/gallery/tiling.jpg",
  },
  {
    title: "Plastering & wall repairs",
    category: "Repairs",
    alt: "Plastering and wall finishing during home repair work",
    image: "/images/gallery/plastering.jpg",
  },
  {
    title: "Furniture assembly & fittings",
    category: "Assembly",
    alt: "Handyman using a cordless drill for assembly and fitting work",
    image: "/images/gallery/assembly.jpg",
  },
  {
    title: "Property maintenance",
    category: "Maintenance",
    alt: "Mixing materials for property maintenance and repair work",
    image: "/images/gallery/maintenance.jpg",
  },
  {
    title: "Kitchen renovations",
    category: "Renovations",
    alt: "Modern renovated kitchen representing home improvement work",
    image: "/images/gallery/kitchen.jpg",
  },
];

export function getGalleryItems(limit?: number): GalleryItem[] {
  if (!limit) return galleryItems;
  return galleryItems.slice(0, limit);
}
