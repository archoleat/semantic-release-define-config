import { expect } from 'chai';
import { describe, it } from 'mocha';

import type { SemanticReleaseConfig } from '../src/types/index.d.ts';

import { defineConfig } from '../src/index.ts';

describe('define', () => {
  it('define empty config', () => {
    // expectTypeOf(defineConfig({})).toEqualTypeOf<SemanticReleaseConfig>();
  });

  it('define ESLint config', () => {
    // expectTypeOf(
    //   defineConfig({
    //     env: {},
    //     extends: [],
    //     rules: {},
    //   })
    // ).toEqualTypeOf<SemanticReleaseConfig>();
  });

  it('define an item of flat ESLint config', () => {
    // expectTypeOf(
    //   defineFlatConfig({
    //     ignores: [],
    //     plugins: {},
    //     rules: {},
    //   })
    // ).toEqualTypeOf<FlatSemanticReleaseConfig>();
  });
});
