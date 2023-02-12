import {Command, Flags, CliUx} from '@oclif/core'
import * as EndpointV1 from '../../endpoints/v1/index.js'
import YAML from 'yaml'
import fs from 'fs-extra'
import lodash from 'lodash'
import {CRED_PATH} from '../../common.js'
import BaseCommand from '../base.js'

export default class Login extends BaseCommand {
  static description = 'Log in markji.'

  static examples = [
    `$ <%= config.bin %> <%= command.id %>
profile: example-profile
username: example-username
password: ***
Logged by example-username (example-profile)!`,
  ]

  static flags = {
    username: Flags.string({char: 'u'}),
    password: Flags.string(),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(Login)

    if (!flags.profile || flags.profile == 'default') {
      flags.profile = await CliUx.ux.prompt('Your profile name', {default: 'default'})
    }

    if (!flags.username) {
      flags.username = await CliUx.ux.prompt('Username')
    }

    if (!flags.password) {
      flags.password = await CliUx.ux.prompt('Password', {type: 'hide'})
    }

    const response = await EndpointV1.Users.login(flags.username, flags.password)

    if (response.success) {
      let credentials: object = YAML.parse(fs.readFileSync(CRED_PATH, 'utf8'))
      if (!credentials) credentials = {}
      lodash.set(credentials, `markji.${flags.profile}.token`, response.data.token)
      fs.writeFileSync(CRED_PATH, YAML.stringify(credentials))
    }
    else {
      response.errors.forEach(ele => this.error(ele.message))
    }

    this.log(`Logged by ${flags.profile}`)
  }
}
