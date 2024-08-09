import { describe, expectTypeOf, test as spec } from 'vitest';

import { UserConfig } from '#types';

import { defineConfig } from '#src';

describe('Semantic Release Config', () => {
  spec('empty config', async () => {
    expectTypeOf(defineConfig({})).toEqualTypeOf<UserConfig>();
  });

  spec('config', async () => {
    expectTypeOf(
      defineConfig({
        branches: [],
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
