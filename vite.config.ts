import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
import svgr from "vite-plugin-svgr"
import Terminal from "vite-plugin-terminal";

export default defineConfig({
  plugins: [
    Terminal({
      console: 'terminal',
      output: ['terminal', 'console']
    }),

    react(),
    basicSsl({
      name: 'localhost'
    }),
    svgr()
  ],
  server: {
    https: true,
    host: '0.0.0.0',
    port: 3001,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'https://w.bankon.click',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
    }
  }
})