import { defineConfig } from 'vite'
import { config } from 'dotenv'
import react from '@vitejs/plugin-react'

// Load environment variables from .env file
config()

// https://vitejs.dev/config/
export default defineConfig({
  // Your Vite configuration
  define: {
    'process.env': process.env,
  },
  plugins: [react()],
})
