// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // main: resolve(__dirname, 'index.html'),
        main: resolve(__dirname, 'index.html'),
        unsubscribe: resolve(__dirname, 'unsubscribe.html'),
        schedule: resolve(__dirname, 'schedule.html')
      },
    },
  },
});
