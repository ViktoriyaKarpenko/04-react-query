import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';

export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  optimizeDeps: {
    include: ['react-paginate'],
  },
  build: {
    commonjsOptions: {
      include: [/react-paginate/, /node_modules/],
    },
  },
});
