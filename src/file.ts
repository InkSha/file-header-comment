import fs from 'node:fs'

export const writeHeadComment = (file: string, comment: string) => {
  const raw = fs
    .readFileSync(file)
    .toString()
    .replaceAll('\r\n', '\n')
    .replaceAll('\r', '\n')
    .split('\n')
  const head = comment.split('\n').filter(Boolean)
  console.log({ raw, head })
  if (raw[0] === head[0]) {
    let tail = ''
    do {
      tail = raw.shift() || ''
    } while (tail !== head[head.length - 1])
  }

  fs.writeFileSync(file, head.concat(raw).join('\n'))

  return file
}
