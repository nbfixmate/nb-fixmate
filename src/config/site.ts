export interface SiteConfiguration {
  name: string;
  baseUrl: URL;
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultOpenGraphImage: string;
  locale: string;
  language: string;
}

export const site: SiteConfiguration = {
  name: "NB Fixmate",
  baseUrl: new URL("https://nbfixmate.com.au"),
  defaultTitle: "NB Fixmate | Handyman & Property Maintenance Adelaide",
  titleTemplate: "%s | NB Fixmate",
  defaultDescription:
    "Adelaide handyman and property maintenance from NB Fixmate. Fully insured repairs, renovations, and upkeep for homes, rentals, and commercial properties. Request a free quote.",
  defaultOpenGraphImage: "/brand/nb-fixmate-logo.png",
  locale: "en_AU",
  language: "en-AU",
};
