import { describe, expect, test as spec } from 'bun:test';

import { defineConfig } from '#src/index.ts';
import type { UserConfig } from '#types/user-config.ts';

describe('Semantic Release Config', () => {
  spec('should return empty config', () => {
    const config = defineConfig({});

    expect(config).toMatchObject({});
    expect(config satisfies UserConfig).toBeDefined();
  });

  spec('should return config with all properties', () => {
    const config = defineConfig({
      branches: [
        'main',
        {
          channel: 'next',
          name: 'alpha',
          prerelease: true,
          range: '',
        },
      ],
      ci: false,
      debug: false,
      dryRun: false,
      extends: [],
      plugins: [],
      preset: '',
      repositoryUrl: '',
      tagFormat: '',
    });

    expect(config).toMatchObject({
      branches: [
        'main',
        {
          channel: 'next',
          name: 'alpha',
          prerelease: true,
          range: '',
        },
      ],
      ci: false,
      debug: false,
      dryRun: false,
      extends: [],
      plugins: [],
      preset: '',
      repositoryUrl: '',
      tagFormat: '',
    });

    expect(config satisfies UserConfig).toBeDefined();
  });
});
