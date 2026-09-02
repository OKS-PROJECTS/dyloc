import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const base = process.env.GITHUB_ACTIONS ? '/dyloc/' : '/'

export default defineConfig({
  base,
  server: process.env.PORT
    ? { port: Number(process.env.PORT), strictPort: true }
    : undefined,
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'spa-404',
      closeBundle() {
        const i = resolve('dist/index.html')
        if (existsSync(i)) copyFileSync(i, resolve('dist/404.html'))
      },
    },
  ],
})
