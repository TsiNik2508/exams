import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Относительные пути для reg.ru
  build: {
    // Оптимизация сборки
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Разделяем vendor и app код
          vendor: ['react', 'react-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
          router: ['react-router-dom'],
        },
        // Оптимизация имен файлов для кэширования
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || 'asset'
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(name)) {
            return `assets/media/[name]-[hash].[ext]`
          }
          if (/\.(png|jpe?g|gif|svg|ico|webp)(\?.*)?$/i.test(name)) {
            return `assets/images/[name]-[hash].[ext]`
          }
          if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(name)) {
            return `assets/fonts/[name]-[hash].[ext]`
          }
          return `assets/[name]-[hash].[ext]`
        },
      },
    },
    // Оптимизация CSS
    cssCodeSplit: true,
    // Оптимизация изображений
    assetsInlineLimit: 4096,
    // Копирование .htaccess в папку сборки
    copyPublicDir: true,
  },
  // Оптимизация dev сервера
  server: {
    hmr: {
      overlay: false,
    },
  },
  // Оптимизация предзагрузки
  optimizeDeps: {
    include: ['react', 'react-dom', '@mui/material', '@mui/icons-material'],
  },
})
