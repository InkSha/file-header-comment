import { UserConfig } from './types'

export const defaultConfig: UserConfig = {
  ignores: [],
  files: {
    '.*.ts': (file, info) => {
      return [
        '/**',
        ` * @file ${file}`,
        ' * @description xxxxx',
        ` * @lastUpdate ${info.author_name}<${info.author_email}>`,
        ` * @updateAt ${info.commit_time_date} ${new Date().toTimeString()}`,
        ` * @subject ${info.commit_subject}`,
        ' */',
      ].join('\n')
    },
  },
}

export const loadConfig = async (filepath?: string): Promise<UserConfig> => {
  return filepath
    ? import(filepath).then((module) => module.default)
    : defaultConfig
}
