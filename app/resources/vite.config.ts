import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    laravel({
      hotFile: '../storage/athena.hot',
      buildDirectory: '../../public/build/athena',
      input: ['src/styles/main.scss', 'src/main.tsx'],
      refresh: [],
  }),
  react({babel: { plugins: ["babel-plugin-react-compiler", { }] }}),
  ],
  esbuild: {
    jsx: 'automatic',
},
server: {
  port: 5142,
},
resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
