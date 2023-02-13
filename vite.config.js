import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@context": "/src/context",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@routes": "/src/routes",
      "@services": "/src/services",
      "@utils": "/src/utils",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
