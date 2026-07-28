import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  target: 'es2022',
  sourcemap: true,
  splitting: false,
  minify: false,
})
