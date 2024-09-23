import { defineConfig } from 'vite'

export default defineConfig({
    base: '/hitman-dialog',
    build: {
        outDir: '../docs',
        emptyOutDir: true,
        cssMinify: true,
    },
    clearScreen: true,
})
