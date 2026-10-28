export interface GalleryItem {
  title: string;
  category: string;
  alt: string;
  image: string;
  state?: "before" | "after";
  href?: string;
}

const kitchenCaseStudy = "/projects/kitchen-renovation-adelaide";
const shedCaseStudy = "/projects/garden-shed-installation-adelaide";
const houseCaseStudy = "/projects/house-renovation-adelaide";

/** Authentic NB Fixmate project photos from completed Adelaide jobs. */
export const galleryItems: GalleryItem[] = [
  {
    title: "House renovation living room",
    category: "Renovations",
    alt: "Renovated Adelaide living room with light wood flooring, bouclé sofa, and timber sliding doors",
    image: "/images/gallery/adelaide-handyman-house-renovation-living-room.jpg",
    href: houseCaseStudy,
  },
  {
    title: "Kitchen renovation completed",
    category: "Kitchens",
    alt: "Completed modern Adelaide kitchen with white cabinets, charcoal countertops, and wood-look flooring",
    image: "/images/gallery/adelaide-handyman-kitchen-renovation-completed.jpg",
    href: kitchenCaseStudy,
  },
  {
    title: "House renovation kitchen",
    category: "Renovations",
    alt: "Renovated Adelaide kitchen with light wood cabinets, cream benches, and wood-look flooring",
    image: "/images/gallery/adelaide-handyman-house-renovation-kitchen.jpg",
    href: houseCaseStudy,
  },
  {
    title: "Laminate flooring installation",
    category: "Flooring",
    alt: "Light oak laminate flooring with white skirting and a green feature wall in an Adelaide home",
    image: "/images/gallery/adelaide-handyman-laminate-flooring-installation.jpg",
  },
  {
    title: "House renovation living dining",
    category: "Renovations",
    alt: "View from renovated Adelaide living area through to dining room with light wood flooring",
    image: "/images/gallery/adelaide-handyman-house-renovation-living-dining.jpg",
    href: houseCaseStudy,
  },
  {
    title: "Kitchen before renovation",
    category: "Kitchens",
    alt: "Dated Adelaide kitchen before renovation with beige tiles and worn laminate benches",
    image: "/images/gallery/adelaide-handyman-kitchen-renovation-before.jpg",
    state: "before",
    href: kitchenCaseStudy,
  },
  {
    title: "Garden shed installation",
    category: "Sheds",
    alt: "Completed dark charcoal metal garden shed with white trim installed in an Adelaide backyard",
    image: "/images/gallery/adelaide-handyman-garden-shed-completed.jpg",
    href: shedCaseStudy,
  },
  {
    title: "House renovation bedroom",
    category: "Renovations",
    alt: "Renovated Adelaide main bedroom with light wood flooring and modern finishes",
    image: "/images/gallery/adelaide-handyman-house-renovation-bedroom-main.jpg",
    href: houseCaseStudy,
  },
  {
    title: "Kitchen renovation dining view",
    category: "Kitchens",
    alt: "Wide view of renovated Adelaide kitchen and dining area with wood-look flooring",
    image: "/images/gallery/adelaide-handyman-kitchen-renovation-dining-view.jpg",
    href: kitchenCaseStudy,
  },
  {
    title: "House renovation kitchen dining",
    category: "Renovations",
    alt: "Adelaide kitchen breakfast bar and dining area after house renovation",
    image: "/images/gallery/adelaide-handyman-house-renovation-kitchen-dining.jpg",
    href: houseCaseStudy,
  },
  {
    title: "Kitchen before and after",
    category: "Kitchens",
    alt: "Side-by-side before and after comparison of an Adelaide kitchen renovation by NB Fixmate",
    image: "/images/gallery/adelaide-handyman-kitchen-renovation-before-after.jpg",
    href: kitchenCaseStudy,
  },
  {
    title: "House renovation hallway",
    category: "Renovations",
    alt: "Renovated Adelaide hallway with light wood flooring and timber trim",
    image: "/images/gallery/adelaide-handyman-house-renovation-hallway.jpg",
    href: houseCaseStudy,
  },
  {
    title: "House renovation bathroom",
    category: "Renovations",
    alt: "Renovated Adelaide bathroom with half-height beige tiling and timber wall cabinet",
    image: "/images/gallery/adelaide-handyman-house-renovation-bathroom.jpg",
    href: houseCaseStudy,
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
    title: "Garden shed with doors open",
    category: "Sheds",
    alt: "Metal garden shed with double doors open showing the concrete floor and braced door panels in Adelaide",
    image: "/images/gallery/adelaide-handyman-garden-shed-doors-open.jpg",
    href: shedCaseStudy,
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
    title: "Garden shed interior finish",
    category: "Sheds",
    alt: "Interior of a newly installed metal garden shed with corrugated walls and concrete slab floor in Adelaide",
    image: "/images/gallery/adelaide-handyman-garden-shed-interior.jpg",
    href: shedCaseStudy,
  },
  {
    title: "Hoop-top fence and double gate",
    category: "Fencing",
    alt: "Black tubular hoop-top metal fence with a double gate installed along a residential Adelaide front yard",
    image: "/images/gallery/adelaide-handyman-hoop-top-fence-double-gate.jpg",
  },
  {
    title: "Garden shed frame assembly",
    category: "Sheds",
    alt: "Metal garden shed walls and roof frame under assembly on a concrete slab in an Adelaide backyard",
    image: "/images/gallery/adelaide-handyman-garden-shed-frame-assembly.jpg",
    href: shedCaseStudy,
  },
  {
    title: "Garden shed base layout",
    category: "Sheds",
    alt: "Garden shed base rails laid out on a concrete slab during installation in Adelaide",
    image: "/images/gallery/adelaide-handyman-garden-shed-base-layout.jpg",
    href: shedCaseStudy,
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
