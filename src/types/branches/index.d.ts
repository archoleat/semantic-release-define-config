/**
 * @see [Branches Options](https://semantic-release.gitbook.io/semantic-release/usage/configuration#branches)
 */
interface BranchesOptions {
  /**
   * An string containing the branch name.
   */
  name?: string;
  /**
   * A boolean value indicating that it is a pre-release.
   */
  prerelease?: boolean;
}

export { BranchesOptions };
