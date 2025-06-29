import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { customTagger } from "custom-tagger"; // ← replaced here

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && customTagger(), // ← replaced here
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
