import { describe, expectTypeOf, test as spec } from 'vitest';

import type { SemanticReleaseConfig } from '#config/index.d.ts';

import { defineConfig } from '#src/index.ts';

describe('Define Semantic Release Config', () => {
  spec('define empty config', () => {
    expectTypeOf(defineConfig({})).toEqualTypeOf<SemanticReleaseConfig>();
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
    ).toEqualTypeOf<SemanticReleaseConfig>();
  });
});
