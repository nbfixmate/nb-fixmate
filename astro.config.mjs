import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://nbfixmate.com.au",
  output: "static",

  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/component-preview") && !page.includes("/thank-you"),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});