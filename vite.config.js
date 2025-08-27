import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: "FizentYar",
        short_name: "PWA App",
        description: "A React PWA built with Vite",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/calculator192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/calculator512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ]
});
