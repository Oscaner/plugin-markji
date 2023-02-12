import os from 'os'
import path from 'path'
import fs from 'fs-extra'
import YAML from 'yaml'
import lodash from 'lodash'

export const CRED_PATH = path.join(os.homedir(), '.config/maimemo/credentials')

if (!fs.pathExistsSync(CRED_PATH)) {
  fs.createFileSync(CRED_PATH)
}

export function getToken(profile: string = 'default') {
  const credentials = YAML.parse(fs.readFileSync(CRED_PATH, 'utf8'))
  return lodash.get(credentials, `markji.${profile}.token`)
}
