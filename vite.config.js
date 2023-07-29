// vite 設定檔：

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base：編譯的路徑，這邊要區別開發中路徑（npm run dev） or 佈署產品的路徑（npm run build）
  base: process.env.NODE_ENV === "production" ? "/react-sample-gh-pages/" : "/",
  plugins: [react()],
})