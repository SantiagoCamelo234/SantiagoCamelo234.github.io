import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {glob} from 'vite-plugin-gh-pages'

export default defineConfig({
  plugins: [react(), ghPages()],
  base: "/portfolio-ilvar-camelo/",
})



