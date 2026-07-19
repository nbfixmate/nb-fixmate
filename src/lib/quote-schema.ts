import { z } from "zod";

export const quoteFormSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(100),
  phone: z.string().trim().min(8, "Phone number is required").max(40),
  email: z.string().trim().email("Enter a valid email address").max(200),
  service: z.string().trim().min(1, "Select a service").max(120),
  suburb: z.string().trim().min(2, "Suburb is required").max(100),
  preferredDate: z
    .string()
    .trim()
    .max(40)
    .optional()
    .transform((value) => value || undefined),
  message: z
    .string()
    .trim()
    .max(2000)
    .optional()
    .transform((value) => value || undefined),
  website: z.string().trim().optional(),
});

export type QuoteFormInput = z.infer<typeof quoteFormSchema>;
