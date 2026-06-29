import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deploying to https://kr1skros.github.io/ — user site, base stays '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
