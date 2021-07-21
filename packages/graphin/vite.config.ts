import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [reactRefresh()],
  optimizeDeps: {
    esbuildOptions: {
      keepNames: true,
    },
  },
});
