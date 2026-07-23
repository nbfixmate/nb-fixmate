export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "service-areas",
    question: "What areas does NB Fixmate service?",
    answer:
      "NB Fixmate provides fully insured handyman and property maintenance services across Adelaide and surrounding areas in South Australia, including northern, southern, eastern, western, and inner Adelaide suburbs. If you are unsure about your suburb, contact us with your location for a free quote.",
  },
  {
    id: "services-offered",
    question: "What handyman services do you offer in Adelaide?",
    answer:
      "NB Fixmate offers handyman services, home repairs, renovations, painting, carpentry, tiling, plastering, and general property maintenance for homes, rentals, and commercial properties across Adelaide. Browse the full services list or request a free quote for the work you need done.",
  },
  {
    id: "free-quotes",
    question: "Do you offer free quotes?",
    answer:
      "Yes. NB Fixmate offers free quotes for handyman and property maintenance work across Adelaide. You can request a free quote by completing the online form, calling, emailing, or sending a WhatsApp message with your suburb and a short description of the work.",
  },
  {
    id: "insured",
    question: "Are you fully insured?",
    answer:
      "Yes. NB Fixmate provides fully insured handyman and property maintenance services for residential and commercial properties across Adelaide and surrounding areas.",
  },
  {
    id: "property-types",
    question: "What types of properties do you work on?",
    answer:
      "NB Fixmate supports residential homes, rental properties, and commercial premises across Adelaide and surrounding areas with practical handyman repairs and ongoing property maintenance.",
  },
  {
    id: "rental-maintenance",
    question: "Can you help with rental property maintenance?",
    answer:
      "Yes. NB Fixmate provides rental property maintenance support for landlords and property managers across Adelaide, including everyday repairs and upkeep between tenancies or during occupancy. Request a free quote with your suburb and the work required.",
  },
  {
    id: "small-jobs",
    question: "Do you handle small jobs as well as larger work?",
    answer:
      "Yes. No job is too big or too small. NB Fixmate can help with everyday handyman repairs as well as broader renovations and property maintenance projects across Adelaide.",
  },
  {
    id: "request-quote",
    question: "How do I request a quote?",
    answer:
      "Share the handyman or property maintenance service you need, your Adelaide suburb, and a short description of the work through the contact form, phone, email, or WhatsApp. NB Fixmate will follow up once your enquiry details are reviewed.",
  },
  {
    id: "enquiry-details",
    question: "What information should I include in my enquiry?",
    answer:
      "Include the service required, your suburb in Adelaide, preferred timing if you have one, and a brief description of the issue or work needed. Clear details help NB Fixmate prepare an accurate free quote for your property.",
  },
  {
    id: "suburb-coverage",
    question: "Do you service northern Adelaide and nearby suburbs?",
    answer:
      "Yes. NB Fixmate regularly supports handyman and property maintenance work across northern Adelaide and surrounding suburbs, as well as other areas across Adelaide. Share your suburb when you request a free quote and we can confirm coverage for your job.",
  },
  {
    id: "gallery-photos",
    question: "Are the gallery photos from completed NB Fixmate projects?",
    answer:
      "Yes. The gallery shows photos from real NB Fixmate jobs across Adelaide, including flooring, fencing, tiling, decking, and outdoor installs. More project photos will be added as new work is completed.",
  },
];

export const faqSets = {
  home: [
    "service-areas",
    "services-offered",
    "free-quotes",
    "insured",
    "property-types",
    "rental-maintenance",
    "small-jobs",
    "suburb-coverage",
    "request-quote",
    "enquiry-details",
  ],
  about: [
    "insured",
    "service-areas",
    "property-types",
    "small-jobs",
    "free-quotes",
    "suburb-coverage",
    "request-quote",
  ],
  services: [
    "free-quotes",
    "small-jobs",
    "insured",
    "rental-maintenance",
    "property-types",
    "service-areas",
    "enquiry-details",
    "request-quote",
  ],
  contact: [
    "free-quotes",
    "request-quote",
    "enquiry-details",
    "insured",
    "service-areas",
    "suburb-coverage",
  ],
  gallery: [
    "gallery-photos",
    "services-offered",
    "free-quotes",
    "insured",
    "service-areas",
    "request-quote",
  ],
} as const;

export type FaqSetKey = keyof typeof faqSets;

export function getFaqItems(set: FaqSetKey): FaqItem[] {
  const ids = faqSets[set];
  return ids
    .map((id) => faqItems.find((item) => item.id === id))
    .filter((item): item is FaqItem => Boolean(item));
}
