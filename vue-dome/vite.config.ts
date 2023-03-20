import electron from "vite-plugin-electron"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    electron([
    {
      entry:"electron/main/index.ts",
      vite:{
        build:{
          outDir:"dist/electron/main"
        }
      }
    }
  ])],
})
