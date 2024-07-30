import type { Options } from 'semantic-release';

interface SemanticReleaseConfig extends Options {
  /**
   * All plugins will receive the `preset` option,
   * which will be used by both @semantic-release/commit-analyzer
   * and @semantic-release/release-notes-generator.
   */
  preset?: string;
}

export { SemanticReleaseConfig };
