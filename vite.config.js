import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Abre automáticamente el navegador
    port: 5173, // Puedes cambiarlo si hay conflictos
  },
  resolve: {
    alias: {
      '@': '/src', // Alias para imports más limpios: import X from '@/components/X'
    },
  },
});
