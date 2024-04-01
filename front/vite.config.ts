import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/src",
      },
      {
        find: "@assets",
        replacement: "/src/assets",
      },
      {
        find: "@font",
        replacement: "/src/assets/font",
      },
      {
        find: "@images",
        replacement: "/src/assets/images",
      },
      {
        find: "@js",
        replacement: "/src/assets/js",
      },
      {
        find: "@pages",
        replacement: "/src/pages",
      },
      {
        find: "@layouts",
        replacement: "/src/layouts",
      },
      {
        find: "@components",
        replacement: "/src/components",
      },
    ],
  },
});
