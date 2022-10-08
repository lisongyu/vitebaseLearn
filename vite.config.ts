import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react';
import testHooks from "./plugins/test-hooks";
import path from 'path';





// import viteEslint from 'vite-plugin-eslint';

// 全局 scss 文件的路径
// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve('./src/variable.scss'))
// https://vitejs.dev/config/
export default defineConfig({
  root: path.join(__dirname, 'src'),
  resolve: {
    // 别名配置
    alias: {
      '@assets': path.join(__dirname, 'src/assets')
    }
  },
  build: {
    // 8 KB
    assetsInlineLimit: 8 * 1024
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个scss的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    },

  },
  plugins: [
    testHooks(),
    react(),
  

    // viteEslint(),
  ]
});
