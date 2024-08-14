/**
 * Git Commit Pretty Format Placeholder
 *
 * @see [command `git log`](https://git-scm.com/docs/git-log/en#_pretty_formats)
 */
export type GitCommitInfo = {
  /**
   * `%H`
   */
  commit_object_hash: string
  /**
   * `%h`
   */
  commit_object_hash_short: string
  /**
   * `%T`
   */
  tree_object_hash: string
  /**
   * `%t`
   */
  tree_object_hash_short: string
  /**
   * `%P`
   */
  parent_object_hash: string
  /**
   * `%p`
   */
  parent_object_hash_short: string
  /**
   * `%an`
   */
  author_name: string
  /**
   * `%ae`
   */
  author_email: string
  /**
   * `%ad`
   */
  author_modify_date: string
  /**
   * `%ar`
   */
  author_modify_ago: string
  /**
   * `%cn`
   */
  committer_name: string
  /**
   * `%ce`
   */
  committer_email: string
  /**
   * `%cd`
   */
  commit_time_date: string
  /**
   * `%cr`
   */
  commit_time_ago: string
  /**
   * `%s`
   */
  commit_subject: string
  /**
   * `%b`
   */
  commit_description: string
  /**
   * `%n`
   */
  commit_notes: string
  /**
   * `%d`
   */
  branch_name: string
  /**
   * `%e`
   */
  encoding: string
}

/**
 * file head comment template
 *
 * program get result with call the function
 * then will result write to match file
 *
 * @param file match file
 * @param info commit info
 * @return file head comment
 */
export type FileHeadCommentTemplate = (
  file: string,
  info: GitCommitInfo,
) => string

/**
 * user config
 */
export type UserConfig = Partial<{
  /**
   * ignore match files list
   */
  ignores: string[]
  /**
   * match files
   */
  files: {
    /**
     * the key is match filename regexp
     */
    [index: string]: FileHeadCommentTemplate
  }
}>
