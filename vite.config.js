import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      name: "chromium",
      provider: "playwright",
      headless: true,
    },
    coverage: {
      provider: "istanbul",
      reporter: ["text", "html", "lcov"],
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
});
