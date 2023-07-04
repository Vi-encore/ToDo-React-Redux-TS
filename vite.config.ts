import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      app: "/src/app",
      slices: "/src/slices",
      fetches: "/src/fetches",
      types: "/src/types",
    },
  },
});
