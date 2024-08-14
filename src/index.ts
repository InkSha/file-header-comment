import { loadConfig } from './config.js'
import { getCommitFiles, getCommmitInfo, replaceCommit } from './git.js'
import { writeHeadComment } from './file.js'

export const main = async () => {
  console.clear()
  const commitInfo = getCommmitInfo()
  const commitFiles = getCommitFiles()
  const config = await loadConfig()

  config.files ??= {}
  config.ignores ??= []

  const matchFiles = Object.keys(config.files)
  const ignoreFiles = config.ignores
  const files: string[] = []

  for (const file of commitFiles) {
    let template = ''

    for (const reg of matchFiles) {
      if (file.match(reg)) {
        template = reg
        break
      }
    }

    for (const ignore of ignoreFiles) {
      if (file.match(ignore)) {
        template = ''
        break
      }
    }

    if (template) {
      files.push(
        writeHeadComment(file, `${config.files[template](file, commitInfo)}\n`),
      )
    }
  }

  replaceCommit(files)
}
