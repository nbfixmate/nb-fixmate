import { business } from "../config/business";
import type { FaqItem } from "../config/faq";
import { site } from "../config/site";

function absoluteUrl(path: string): string {
  return new URL(path, site.baseUrl).toString();
}

function nonEmptyUrls(urls: string[]): string[] {
  return urls.filter((url) => Boolean(url));
}

export function buildLocalBusinessSchema() {
  const sameAs = nonEmptyUrls([
    business.social.facebookUrl,
    business.social.instagramUrl,
    business.social.tiktokUrl,
    business.social.linkedinUrl,
    business.social.googleBusinessProfileUrl,
  ]);

  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": absoluteUrl("/#business"),
    name: business.displayName,
    alternateName: business.name,
    description: site.defaultDescription,
    url: site.baseUrl.toString(),
    telephone: business.phone.international,
    email: business.email.current,
    image: absoluteUrl(site.defaultOpenGraphImage),
    logo: absoluteUrl("/brand/nb-fixmate-logo.png"),
    slogan: business.tagline,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Adelaide",
      addressRegion: "SA",
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: business.address.primaryServiceArea,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: business.phone.international,
        contactType: "customer service",
        areaServed: "AU",
        availableLanguage: ["en-AU", "en"],
      },
    ],
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function buildFaqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
