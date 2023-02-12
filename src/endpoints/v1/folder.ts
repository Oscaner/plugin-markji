export enum Endpoint {
  Base = 'https://www.markji.com/api/v1/decks/folders',
}

import got, { HTTPError } from 'got'
import UserAgent from 'user-agents';
import { ResponseBody } from '../../interfaces/response.js';

export interface FolderItem {
  id: string,
  creator: string,
  status: string,
  items: {
    object_id: string,
    object_class: string
  }[],
  parent_id: string|null,
  name: string,
  created_time: string,
  updated_time: string
}

export interface FoldersData {
  folders: FolderItem[]
}

export async function list(token: string): Promise<ResponseBody<FoldersData>> {
  try {
    return await got.get(Endpoint.Base, {
      headers: {
        'User-Agent': new UserAgent().toString(),
        'token': token
      },
      followRedirect: true
    }).json()
  }
  catch (error) {
    return JSON.parse((error as HTTPError).response.body as string)
  }
}
