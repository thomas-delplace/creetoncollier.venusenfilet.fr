import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  server:{
    // host:'192.168.1.33', // réseau maison
    // host:'192.168.154.103', // réseau Zoa
    host:'localhost', // général
    port:'3001'
  }
})
