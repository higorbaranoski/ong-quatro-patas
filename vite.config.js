
import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: '/ong-quatro-patas/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssMinify: true,
    minify: 'esbuild',
    rollupOptions: {
      input: {
        inicio: resolve(import.meta.dirname, 'index.html'),
        index: resolve(import.meta.dirname, 'html/index.html'),
        projetos: resolve(import.meta.dirname, 'html/projetos.html'),
        cadastro: resolve(import.meta.dirname, 'html/cadastro.html'),
      },
    },
  },
});
