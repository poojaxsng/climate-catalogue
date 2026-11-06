import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  // Project-site path on GitHub Pages; root path for local dev/preview.
  base: command === 'build' ? '/climate-catalogue/' : '/',
  plugins: [react(), tailwindcss()],
}))
