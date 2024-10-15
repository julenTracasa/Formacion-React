import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["./test/setup-tests.js"],
    environment: "jsdom",
    testMatch: ["**/*.test.tsx"],
    globals: true,
  },
});
