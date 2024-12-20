import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ensure the correct path for the package if needed
      'dayjs': 'dayjs',
    },
  },
  build: {
    rollupOptions: {
      external: [],
    },
  },
});
