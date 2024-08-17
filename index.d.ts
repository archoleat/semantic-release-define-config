import { Options } from 'semantic-release';

interface UserConfig extends Options {
  /**
   * All plugins will receive the `preset` option,
   * which will be used by both @semantic-release/commit-analyzer
   * and @semantic-release/release-notes-generator.
   *
   * Example: 'conventionalcommits'.
   */
  preset?: string;
}

/**
 * Define an Semantic Release config.
 *
 * @param {object} config Semantic Release.
 *
 * @returns Semantic Release config.
 */
declare const defineConfig: (config: UserConfig) => UserConfig;

export { defineConfig };
