import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
      '@farsi-ui/react': path.resolve(__dirname, 'packages/react/src'),
      '@farsi-ui/tokens': path.resolve(__dirname, 'packages/tokens/src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test-setup.ts'],
    include: ['packages/react/src/**/*.test.{ts,tsx}'],
  },
})
