import { describe, expect, test as spec } from 'bun:test';

import { defineConfig } from '#src/index.ts';

describe('Semantic Release Config', async () => {
  spec('should return empty config', async () => {
    expect(defineConfig({}));
  });

  spec('should return config', async () => {
    expect(
      defineConfig({
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
      }),
    );
  });
});
