import { describe, expectTypeOf, test as spec } from 'vitest';

import { defineConfig } from '#index';

import type { UserConfig } from '#types';

describe('Semantic Release Config', async () => {
  spec('should return empty config', async () => {
    expectTypeOf(defineConfig({})).toEqualTypeOf<UserConfig>();
  });

  spec('should return config', async () => {
    expectTypeOf(
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
    ).toEqualTypeOf<UserConfig>();
  });
});
