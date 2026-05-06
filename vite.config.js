import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Госуслуги',
        short_name: 'Госуслуги',
        description: 'Государственные услуги Российской Федерации',
        theme_color: '#0b0d18',
        background_color: '#0b0d18',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: []
      }
    })
  ]
})
