import type { BranchesOptions } from './options/branches.d.ts';

/**
 * Semantic Release Configuration.
 *
 * @see [Configuration] Files (https://semantic-release.gitbook.io/semantic-release/usage/configuration)
 */
interface SemanticReleaseConfig {
  /**
   * @see [RepositoryUrl] (https://semantic-release.gitbook.io/semantic-release/usage/configuration#repositoryurl)
   */
  repositoryUrl?: string;
  /**
   * @see [Extends] (https://semantic-release.gitbook.io/semantic-release/usage/configuration#extends)
   */
  extends?: string | string[];
  /**
   * @see [Branches] (https://semantic-release.gitbook.io/semantic-release/usage/configuration#branches)
   */
  branches?: Array<string | BranchesOptions>;
  /**
   * @see [TagFormat] (https://semantic-release.gitbook.io/semantic-release/usage/configuration#tagformat)
   */
  tagFormat?: string;
  /**
   * @see [DryRun] (https://semantic-release.gitbook.io/semantic-release/usage/configuration#dryrun)
   */
  dryRun?: boolean;
  /**
   * @see [CI] (https://semantic-release.gitbook.io/semantic-release/usage/configuration#ci)
   */
  ci?: boolean;
  /**
   * @see [Plugins] (https://semantic-release.gitbook.io/semantic-release/usage/configuration#plugins)
   */
  plugins?: Array<Array<string | Object> | string>;
  /**
   * @see [Preset] (https://semantic-release.gitbook.io/semantic-release/usage/configuration#preset)
   */
  preset?: string;
  /**
   * @see [Debug] (https://semantic-release.gitbook.io/semantic-release/usage/configuration#debug)
   */
  debug?: boolean;
}

export { SemanticReleaseConfig };
