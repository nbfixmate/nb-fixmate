import { getCollection } from "astro:content";

export interface QuoteServiceOption {
  value: string;
  label: string;
}

const otherServiceOption: QuoteServiceOption = {
  value: "other",
  label: "Others",
};

export async function getQuoteServiceOptions(): Promise<QuoteServiceOption[]> {
  const services = (
    await getCollection("services", ({ data }) => data.published)
  )
    .sort((a, b) => a.data.order - b.data.order)
    .map((service) => ({
      value: service.data.slug,
      label: service.data.title,
    }));

  return [...services, otherServiceOption];
}

export function resolveSelectedService(
  serviceOptions: QuoteServiceOption[],
  requestedService: string,
): string {
  return serviceOptions.some((service) => service.value === requestedService)
    ? requestedService
    : "";
}
