import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src', 'shared', 'ui'),
      '@entities': path.resolve(__dirname, 'src', 'entities'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
        relativeUrls: true,
        javascriptEnabled: true,
      },
    },
  },
});
