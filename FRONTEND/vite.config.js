import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: "/manifest.json",
      registerType: "prompt",
    }),
  ],
  server: {
    host: "0.0.0.0",
  },
});
