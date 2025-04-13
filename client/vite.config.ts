import { defineConfig } from 'vite'
import path from 'path';
import laravel from 'laravel-vite-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    laravel({
      hotFile: '../public/app.hot',
      buildDirectory: '../../public/build/app',
      input: ['src/styles/main.scss', 'src/main.ts'],
      refresh: [],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5142
  }
})
