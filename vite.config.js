import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',  // Add this line to fix your GitHub Pages deployment
  plugins: [react()],
})
