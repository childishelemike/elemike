import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    {
      name: 'jsx',
      transform: (code, id) => {
        if (id.endsWith('.tsx')) {
          return babel.transform(code, {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-react-jsx'],
          }).code;
        }
      },
    },],
  base: './',
})
