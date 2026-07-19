export interface ServiceAreaRegion {
  id: string;
  title: string;
  suburbs: string[];
}

/**
 * Example suburbs by region for coverage messaging.
 * Not an exhaustive list of every Adelaide suburb.
 */
export const serviceAreaRegions: ServiceAreaRegion[] = [
  {
    id: "northern",
    title: "Northern Adelaide",
    suburbs: [
      "Elizabeth",
      "Elizabeth East",
      "Salisbury",
      "Mawson Lakes",
      "Parafield Gardens",
      "Paralowie",
      "Munno Para",
      "Craigmore",
      "Golden Grove",
      "Modbury",
      "Tea Tree Gully",
      "Gawler",
    ],
  },
  {
    id: "central",
    title: "Central & Inner Adelaide",
    suburbs: [
      "Adelaide",
      "North Adelaide",
      "Prospect",
      "Norwood",
      "Unley",
      "Parkside",
      "Goodwood",
      "Kent Town",
      "Walkerville",
      "Payneham",
    ],
  },
  {
    id: "western",
    title: "Western Adelaide",
    suburbs: [
      "Port Adelaide",
      "Semaphore",
      "Woodville",
      "West Lakes",
      "Henley Beach",
      "Grange",
      "Findon",
      "Fulham",
      "Flinders Park",
      "Mile End",
    ],
  },
  {
    id: "southern",
    title: "Southern Adelaide",
    suburbs: [
      "Glenelg",
      "Brighton",
      "Marion",
      "Morphett Vale",
      "Hallett Cove",
      "Reynella",
      "Happy Valley",
      "Aberfoyle Park",
      "Seaford",
      "Mitcham",
    ],
  },
  {
    id: "eastern",
    title: "Eastern Adelaide",
    suburbs: [
      "Burnside",
      "Magill",
      "Athelstone",
      "Campbelltown",
      "Paradise",
      "Rostrevor",
      "Glen Osmond",
      "Glenside",
      "Beaumont",
      "Kensington Gardens",
    ],
  },
];
