import { describe, expectTypeOf, test } from 'vitest';

import type { SemanticReleaseConfig } from '../src/types/index.d.ts';

import { defineConfig } from '../src/index.ts';

describe('Define Config', () => {
  test('define empty config', () => {
    expectTypeOf(defineConfig({})).toEqualTypeOf<SemanticReleaseConfig>();
  });

  test('define Semantic Release config', () => {
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
