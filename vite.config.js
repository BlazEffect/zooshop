import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import 'dotenv/config'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: process.env.SERVER_IP,
    port: process.env.SERVER_PORT,
    watch: {
      usePolling: true
    },
    proxy: {
      '/api': {
        target: process.env.API_SERVER_URL,
        changeOrigin: true,
      }
    }
  }
})
