import shell from 'shelljs'
import { GitCommitInfo } from './types'
import fs from 'node:fs'

/**
 * Git Commit Pretty Format Placeholder
 *
 * @see [command `git log`](https://git-scm.com/docs/git-log/en#_pretty_formats)
 */
export const gitCommitPlaceholder: GitCommitInfo = {
  commit_object_hash: '%H',
  commit_object_hash_short: '%h',
  tree_object_hash: '%T',
  tree_object_hash_short: '%t',
  parent_object_hash: '%P',
  parent_object_hash_short: '%p',
  author_name: '%an',
  author_email: '%ae',
  author_modify_date: '%ad',
  author_modify_ago: '%ar',
  committer_name: '%cn',
  committer_email: '%ce',
  commit_time_date: '%cd',
  commit_time_ago: '%cr',
  commit_subject: '%s',
  commit_description: '%b',
  commit_notes: '%n',
  branch_name: '%d',
  encoding: '%e',
}

const COMMAND_GET_COMMIT_INFO = `git log -1 --pretty=format:"${JSON.stringify(gitCommitPlaceholder).replaceAll('"', '\\"')}"`
const COMMAND_GET_COMMIT_FILES = 'git show --stat -1 --pretty=format:""'

/**
 * get prev commit info
 * @returns prev commit info
 */
export const getCommmitInfo = (): GitCommitInfo => {
  const val = `${shell
    .exec(COMMAND_GET_COMMIT_INFO, { silent: true })
    .toString()
    .replaceAll('\n', '')}`
  return JSON.parse(val)
}

/**
 * get prev commit files list
 * @returns files list
 */
export const getCommitFiles = () => {
  const files: string[] = []
  const result = shell
    .exec(COMMAND_GET_COMMIT_FILES, {
      silent: true,
    })
    .toString()
    .split('\n')
    .map((item) => item.trim())

  let count = 0

  for (const item of result) {
    if (item.startsWith(`${count} file${count > 1 ? 's' : ''} changed, `)) {
      break
    }

    files.push(item.split('|')[0].trim())
    count++
  }

  return files
}

/**
 * replace prev commit
 * @param files add head commit files list
 */
export const replaceCommit = async (files: string[]) => {
  for (const file of files) {
    shell.exec(`git add ${file}`, { silent: true })
  }

  const commitMsg = fs.readFileSync('.git/COMMIT_EDITMSG')

  shell.exec(`git commit --amend -n -m ${commitMsg}`, { silent: true })
}
