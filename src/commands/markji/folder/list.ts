import { CliUx } from '@oclif/core'
import * as EndpointV1 from '../../../endpoints/v1/index.js'
import lodash from 'lodash'
import { getToken } from '../../../common.js'
import BaseCommand from '../../base.js'
import { FolderItem } from '../../../endpoints/v1/folder.js'
import { Tree } from '@oclif/core/lib/cli-ux/styled/tree.js'

export default class List extends BaseCommand {
  static description = 'List the markji folders.'

  static examples = [
    `$ <%= config.bin %> <%= command.id %>`,
  ]

  public async run(): Promise<void> {
    const {flags} = await this.parse(List)

    const response = await EndpointV1.Folder.list(getToken(flags.profile))

    if (response.success) {
      this.buildTree(response.data.folders, null).display()
    }
    else {
      response.errors.forEach((ele) => {
        this.error(
          ele.code == 'user_token_missing' ?
          ele.message + ' (by command: markji:login)' :
          ele.message
        )
      })
    }
  }

  protected buildTree(folders: FolderItem[], parent_id: string|null): Tree {
    const tree = CliUx.ux.tree()

    folders.forEach((folder) => {
      if (folder.parent_id != parent_id) {
        return
      }

      const folder_info = Object.entries(
        lodash.countBy(folder.items.map(ele => ele.object_class))
      ).map((value) => {
        return `${value[1]} ${value[0].toLowerCase()}`
      }).join(', ')

      tree.insert(
        `${folder.name} (${folder_info ? folder_info : 0})`,
        this.buildTree(folders, folder.id)
      )
    })

    return tree
  }

}
