import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin';
import path from 'node:path';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    laravel({
      hotFile: '../var/tmp/app.hot',
      buildDirectory: '../../public/build',
      input: ['src/styles/main.scss', 'src/main.tsx'],
      refresh: [],
    }),
    react({ babel: { plugins: ["babel-plugin-react-compiler", {}] } }),
  ],
  server: {
    port: 5143,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@sora": path.resolve(__dirname, "./src/sora"),
    },
  },
})
