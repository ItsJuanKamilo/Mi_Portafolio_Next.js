import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/My_Web/', // Cambia "My_Web" por el nombre exacto de tu repositorio
});
