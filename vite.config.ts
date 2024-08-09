import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace'
import { env } from 'process'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),replace({
    'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
    preventAssignment: true,
  }),
  ],
  build: {
    target: 'es2015',
    outDir: 'dist/react-example',
    lib: {
      entry: 'src/main.tsx',
      name: 'WpsReactExample',
      formats: ['umd'],
    },
    rollupOptions: {
      output: {},
    },
  },
})
