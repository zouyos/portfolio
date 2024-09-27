import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': './src',
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  css: {
    modules: {
      localsConvention: 'camelCase', // Optional: use camelCase for class names in CSS modules
    },
  },
});
