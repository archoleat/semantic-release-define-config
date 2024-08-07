import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['specs/**/*.spec.ts'],
    watch: false,
    coverage: {
      all: false,
    },
  },
});
