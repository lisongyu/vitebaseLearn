import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer'
import path from 'path';

// import viteEslint from 'vite-plugin-eslint';

// 全局 scss 文件的路径
// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve('./src/variable.scss'))
// https://vitejs.dev/config/
export default defineConfig({
  root: path.join(__dirname, 'src'),
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个scss的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    },
    // 进行 PostCSS 配置
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    }
  },
  plugins: [
    react()
    // viteEslint(),
  ]
});
