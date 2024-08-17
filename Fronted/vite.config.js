import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // Yeh line ensure karti hai ki Vite aapke local IP address par bind ho jaye
  },
  plugins: [react()],
})
