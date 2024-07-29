import type { BranchesOptions } from '#branches/index.d.ts';

/**
 * Semantic Release Configuration.
 *
 * @see [Configuration Options](https://semantic-release.gitbook.io/semantic-release/usage/configuration)
 */
interface SemanticReleaseConfig {
  /**
   * An array of strings or objects containing branch names.
   *
   * @see [Branches](https://semantic-release.gitbook.io/semantic-release/usage/configuration#branches)
   */
  branches?: Array<string | BranchesOptions>;
  /**
   * A boolean value indicating whether CI skipping is allowed.
   *
   * @see [CI](https://semantic-release.gitbook.io/semantic-release/usage/configuration#ci)
   */
  ci?: boolean;
  /**
   * A boolean value indicating whether debugging information is allowed to be output.
   *
   * @see [Debug](https://semantic-release.gitbook.io/semantic-release/usage/configuration#debug)
   */
  debug?: boolean;
  /**
   * A boolean value indicating whether a preview of the pending release is allowed.
   *
   * @see [DryRun](https://semantic-release.gitbook.io/semantic-release/usage/configuration#dryrun)
   */
  dryRun?: boolean;
  /**
   * An string or array of strings containing a path to a shareable configuration.
   *
   * @see [Extends](https://semantic-release.gitbook.io/semantic-release/usage/configuration#extends)
   */
  extends?: string | string[];
  /**
   * An array of strings or arrays.
   *
   * @see [Plugins](https://semantic-release.gitbook.io/semantic-release/usage/configuration#plugins)
   */
  plugins?: Array<Array<string | Object> | string>;
  /**
   * An string with preset name, example: `conventionalcommits`
   *
   * @see [Preset](https://semantic-release.gitbook.io/semantic-release/usage/configuration#preset)
   */
  preset?: string;
  /**
   * An string containing git repository URL.
   *
   * @see [RepositoryUrl](https://semantic-release.gitbook.io/semantic-release/usage/configuration#repositoryurl)
   */
  repositoryUrl?: string;
  /**
   * An string containing git tag format.
   *
   * @see [TagFormat](https://semantic-release.gitbook.io/semantic-release/usage/configuration#tagformat)
   */
  tagFormat?: string;
}

export { SemanticReleaseConfig };
