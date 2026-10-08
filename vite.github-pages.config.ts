import tailwindcss from "@tailwindcss/postcss";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: path.join(projectRoot, "github-pages"),
  base: "/Eder-Cipriano-Portfolio/",
  publicDir: path.join(projectRoot, "public"),
  plugins: [react()],
  css: {
    postcss: { plugins: [tailwindcss()] },
  },
  build: {
    outDir: path.join(projectRoot, "dist", "github-pages"),
    emptyOutDir: true,
  },
});
