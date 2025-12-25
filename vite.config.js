import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  return defineConfig({
    plugins: [
      react()
    ],
    define: {
      'process.env': env
    },
    server:{
      host:env.VITE_APP_URL,
      port:env.VITE_APP_PORT
    }
  })
}