import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/mockapi": {
        target: "https://685c4d07769de2bf085c58e4.mockapi.io",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/mockapi/, ""),
      },
    },
  },
});
