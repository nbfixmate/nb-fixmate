import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const services = defineCollection({
  loader: glob({ base: "./src/content/services", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    shortDescription: z.string(),
    icon: z.string(),
    order: z.number().int().positive(),
    featured: z.boolean(),
    published: z.boolean(),
    seoTitle: z.string(),
    seoDescription: z.string(),
  }),
});

const projectGalleryImage = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    shortDescription: z.string(),
    category: z.string(),
    location: z.string(),
    beforeImage: z.string().optional(),
    afterImage: z.string().optional(),
    featuredImage: z.string(),
    featured: z.boolean(),
    published: z.boolean(),
    completionDate: z.coerce.date().optional(),
    imageAlt: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    eyebrow: z.string().optional(),
    galleryTitle: z.string().optional(),
    galleryDescription: z.string().optional(),
    galleryImages: z.array(projectGalleryImage).default([]),
    offerTitle: z.string().optional(),
    offerDescription: z.string().optional(),
    offerBody: z.string().optional(),
    offerPoints: z.array(z.string()).default([]),
  }),
});

const testimonials = defineCollection({
  loader: glob({ base: "./src/content/testimonials", pattern: "**/*.md" }),
  schema: z.object({
    customerName: z.string(),
    customerRole: z.string().optional(),
    customerType: z.string().optional(),
    avatar: z.string().optional(),
    quote: z.string(),
    rating: z.number().int().min(1).max(5),
    featured: z.boolean(),
    published: z.boolean(),
    date: z.coerce.date(),
  }),
});

export const collections = { projects, services, testimonials };
