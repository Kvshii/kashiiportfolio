import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
        manifest: {
          id: '/',
          name: 'Kashif Portfolio',
          short_name: 'Kashif AI',
          description: 'Kashif — Digital Builder, Creator & Technology Explorer.',
          theme_color: '#0ea5e9',
          background_color: '#0f172a',
          display: 'standalone',
          start_url: '/',
          scope: '/',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2,jpg,jpeg}'],
        },
        devOptions: {
          enabled: false,
        },
      }),
      {
        name: 'remove-vite-client-from-managed-preview',
        enforce: 'post' as const,
        transformIndexHtml(html: string) {
          return html.replace(/<script type="module" src="\/\@vite\/client"><\/script>\s*/g, '');
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // Managed Preview is proxied without a reliable WebSocket upgrade path.
      // Keep the page stable by serving the Vite client without HMR injection.
      hmr: false,
      watch: null,
    },
  };
});
