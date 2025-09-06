import { describe, test as spec } from 'bun:test';
import { expectTypeOf } from 'expect-type';

import { defineConfig } from '#src/index.ts';
import type { UserConfig } from '#types/user-config.ts';

describe('Semantic Release Config', () => {
  spec('should return empty config', () => {
    expectTypeOf(defineConfig({})).toEqualTypeOf<UserConfig>();
  });

  spec('should return config with all properties', () => {
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
