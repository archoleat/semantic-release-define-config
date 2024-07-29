import { describe, expectTypeOf, test as spec } from 'vitest';

import { Options } from 'semantic-release';

import { defineConfig } from '#index';

describe('Define Semantic Release Config', () => {
  spec('define empty config', () => {
    expectTypeOf(defineConfig({})).toEqualTypeOf<Options>();
  });

  spec('define config', () => {
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
    ).toEqualTypeOf<Options>();
  });
});
