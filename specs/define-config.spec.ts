import { describe, expect, test as spec } from 'bun:test';

import { defineConfig } from '#src/index.ts';
import type { UserConfig } from '#types/user-config.ts';

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

describe('Semantic Release Config', () => {
  spec('should return empty config', () => {
    const emptyConfig = defineConfig({});

    expect(emptyConfig).toMatchObject({});
    expect(emptyConfig satisfies UserConfig).toBeDefined();
  });

  spec('should return config with all properties', () => {
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
