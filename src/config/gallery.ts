export interface GalleryItem {
  title: string;
  category: string;
  alt: string;
  image: string;
  state?: "before" | "after";
}

/** Authentic NB Fixmate project photos from completed Adelaide jobs. */
export const galleryItems: GalleryItem[] = [
  {
    title: "Laminate flooring installation",
    category: "Flooring",
    alt: "Light oak laminate flooring with white skirting and a green feature wall in an Adelaide home",
    image: "/images/gallery/adelaide-handyman-laminate-flooring-installation.jpg",
  },
  {
    title: "Modern metal fence installation",
    category: "Fencing",
    alt: "Dark charcoal metal fence with lattice top and stone-look base along a modern Adelaide home",
    image: "/images/gallery/adelaide-handyman-modern-metal-fence-installation.jpg",
  },
  {
    title: "Bathroom shower tiling",
    category: "Tiling",
    alt: "Shower floor tiling with dark brown tiles, white grout, and a central drain in an Adelaide bathroom",
    image: "/images/gallery/adelaide-handyman-bathroom-shower-tiling.jpg",
  },
  {
    title: "Fold-down clothesline install",
    category: "Outdoor",
    alt: "Fold-down clothesline installed on black posts in front of a charcoal corrugated fence in Adelaide",
    image: "/images/gallery/adelaide-handyman-clothesline-installation.jpg",
  },
  {
    title: "Turf lawn installation",
    category: "Landscaping",
    alt: "Freshly laid turf lawn with sprinkler watering and new shrubs planted along a metal fence in Adelaide",
    image: "/images/gallery/adelaide-handyman-turf-lawn-installation.jpg",
  },
  {
    title: "Hoop-top fence and double gate",
    category: "Fencing",
    alt: "Black tubular hoop-top metal fence with a double gate installed along a residential Adelaide front yard",
    image: "/images/gallery/adelaide-handyman-hoop-top-fence-double-gate.jpg",
  },
  {
    title: "Hybrid flooring with feature wall",
    category: "Flooring",
    alt: "Timber-look hybrid flooring installed in a room with a dark green feature wall and white skirting",
    image: "/images/gallery/adelaide-handyman-hybrid-flooring-feature-wall.jpg",
  },
  {
    title: "Picket fence with privacy lattice",
    category: "Fencing",
    alt: "Cream timber picket fence with square lattice privacy extension at a suburban Adelaide property",
    image: "/images/gallery/adelaide-handyman-picket-fence-lattice-privacy.jpg",
  },
  {
    title: "New turf being watered in",
    category: "Landscaping",
    alt: "Newly installed turf lawn being watered with a sprinkler beside a charcoal metal boundary fence in Adelaide",
    image: "/images/gallery/adelaide-handyman-new-turf-watering.jpg",
  },
  {
    title: "Hoop-top front fence install",
    category: "Fencing",
    alt: "Black hoop-top tubular metal fence installed along a suburban front yard with flowering shrubs in Adelaide",
    image: "/images/gallery/adelaide-handyman-hoop-top-front-fence.jpg",
  },
  {
    title: "Timber flooring and skirting",
    category: "Carpentry",
    alt: "Light timber flooring with dark wood skirting boards installed in an Adelaide home",
    image: "/images/gallery/adelaide-handyman-timber-flooring-skirting.jpg",
  },
  {
    title: "Colorbond side gate",
    category: "Fencing",
    alt: "Charcoal corrugated metal side gate installed between a brick wall and cream Colorbond fence",
    image: "/images/gallery/adelaide-handyman-colorbond-side-gate.jpg",
  },
  {
    title: "On-site fencing carpentry",
    category: "Fencing",
    alt: "NB Fixmate branded van and miter saw set up during timber picket fence installation in Adelaide",
    image: "/images/gallery/adelaide-handyman-fencing-worksite-van.jpg",
  },
  {
    title: "Flooring trim around wardrobe",
    category: "Flooring",
    alt: "Timber-look flooring finished with matching scotia trim along a white sliding wardrobe",
    image: "/images/gallery/adelaide-handyman-flooring-trim-finish.jpg",
  },
  {
    title: "Hoop-top fence along the street",
    category: "Fencing",
    alt: "Black tubular hoop-top fence freshly installed along a residential sidewalk and front lawn in Adelaide",
    image: "/images/gallery/adelaide-handyman-hoop-top-fence-installation.jpg",
  },
  {
    title: "Timber deck maintenance",
    category: "Decking",
    alt: "Outdoor timber decking planks on an Adelaide rooftop terrace ready for maintenance work",
    image: "/images/gallery/adelaide-handyman-timber-deck-maintenance.jpg",
  },
  {
    title: "Weathered deck before restoration",
    category: "Decking",
    alt: "Close-up of weathered timber deck boards with peeling stain before deck restoration in Adelaide",
    image: "/images/gallery/adelaide-handyman-weathered-deck-restoration.jpg",
    state: "before",
  },
  {
    title: "Damaged picket fence before repair",
    category: "Fencing",
    alt: "Damaged cream timber picket fence and sagging gate with broken pickets before repair in Adelaide",
    image: "/images/gallery/adelaide-handyman-picket-fence-repair-before.jpg",
    state: "before",
  },
  {
    title: "Hallway flooring finish",
    category: "Flooring",
    alt: "Newly installed light wood flooring continuing from a room into a hallway with white skirting",
    image: "/images/gallery/adelaide-handyman-hallway-flooring-installation.jpg",
  },
  {
    title: "Bedroom timber flooring",
    category: "Flooring",
    alt: "Light timber flooring installed in a bright Adelaide bedroom with dark skirting boards",
    image: "/images/gallery/adelaide-handyman-bedroom-timber-flooring.jpg",
  },
];

export function getGalleryItems(limit?: number): GalleryItem[] {
  if (!limit) return galleryItems;
  return galleryItems.slice(0, limit);
}
