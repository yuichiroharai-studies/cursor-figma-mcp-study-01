// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://yuichiroharai-studies.github.io',
  base: '/cursor-figma-mcp-study-01/',
  vite: {
    plugins: [tailwindcss()],
  },
});
