import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  server:{
    host:import.meta.env.VITE_APP_URL,
    port:import.meta.env.VITE_APP_PORT
  }
})
