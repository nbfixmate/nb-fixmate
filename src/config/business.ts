export interface BusinessConfiguration {
  name: string;
  displayName: string;
  tagline: string;
  phone: {
    display: string;
    international: string;
    telUrl: string;
  };
  email: {
    current: string;
    plannedPublic: string;
  };
  whatsapp: {
    number: string;
    url: string;
  };
  address: {
    full: string;
    publicLocation: string;
    primaryServiceArea: string;
    mapsUrl: string;
  };
  social: {
    facebookUrl: string;
    instagramUrl: string;
    tiktokUrl: string;
    linkedinUrl: string;
    googleBusinessProfileUrl: string;
  };
  credentials: {
    isFullyInsured: boolean;
    offersFreeQuotes: boolean;
  };
}

export const business: BusinessConfiguration = {
  name: "NB Fixmate",
  displayName: "NB Fixmate",
  tagline: "Home Fixes Made Easy",
  phone: {
    display: "+61 411 790 536",
    international: "+61411790536",
    telUrl: "tel:+61411790536",
  },
  email: {
    current: "hello@nbfixmate.com.au",
    plannedPublic: "hello@nbfixmate.com.au",
  },
  whatsapp: {
    number: "+61 411 790 536",
    url: "https://wa.me/61411790536",
  },
  address: {
    full: "4 Dewey Street, Elizabeth East, SA 5112",
    publicLocation: "Adelaide, South Australia",
    primaryServiceArea: "Adelaide and surrounding areas, South Australia",
    mapsUrl: "",
  },
  social: {
    facebookUrl: "https://www.facebook.com/people/NB-fixmate/61581736023870/",
    instagramUrl: "https://www.instagram.com/nbfixmate/",
    tiktokUrl: "https://www.tiktok.com/@nbfixmate",
    linkedinUrl: "",
    // Official NB Fixmate Google Business Profile (verified Maps place)
    googleBusinessProfileUrl:
      "https://www.google.com/maps/place/NB+Fixmate/data=!4m2!3m1!1s0x655216ba8e23b90f:0x8876c6d057063580",
  },
  credentials: {
    isFullyInsured: true,
    offersFreeQuotes: true,
  },
};
