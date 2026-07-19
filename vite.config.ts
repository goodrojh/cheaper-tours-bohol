import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves the production build from /cheaper-tours-bohol/;
// the dev server runs at the root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/cheaper-tours-bohol/' : '/',
  plugins: [react()],
}))
