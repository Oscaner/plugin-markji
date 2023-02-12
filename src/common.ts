import os from 'os'
import path from 'path'
import fs from 'fs-extra'

export const CRED_PATH = path.join(os.homedir(), '.config/maimemo/credentials')

if (!fs.pathExistsSync(CRED_PATH)) {
  fs.createFileSync(CRED_PATH)
}
