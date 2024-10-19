import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from 'url';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [path.resolve(fileURLToPath(import.meta.url), 'src')],
      }
    }
  },
  test: {
    browser: {
      enabled: true,
      name: "chromium",
      provider: "playwright",
      headless: true,
    },
    coverage: {
      provider: "istanbul",
      reporter: ["text", "html", "lcov", "json"],
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
});
