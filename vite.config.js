import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/Lap-3-Project-client/",
  plugins: [react()],
  test: {
    environment: 'jsdom'
  }
})
