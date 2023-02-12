export enum Endpoint {
  Login = 'https://www.markji.com/api/v1/users/login',
  Profile = 'https://www.markji.com/api/v1/users/profile',
}

import got, { HTTPError } from "got"
import UserAgent from 'user-agents'
import { ResponseBody } from '../../interfaces/response.js'

export interface LoginData {
  user: {
    nick: string,
    avatar: string,
    level: {
      level: number,
      description: string,
    },
    email: string,
    email_verified: boolean,
    phone: string,
    phone_verified: boolean,
    oauths: {
      appid: string,
      type: string,
      username: string
    }[],
    description: string,
    created_time: string,
    id: number
  },
  token: string
}

export async function login(username: string, password: string): Promise<ResponseBody<LoginData>> {
  try {
    return await got.post(Endpoint.Login, {
      json: {
        identity: username,
        password: password,
        nuencrypt_fields: ['password'],
      },
      headers: {
        'User-Agent': new UserAgent().toString(),
      },
      followRedirect: true
    }).json()
  }
  catch (error) {
    return JSON.parse((error as HTTPError).response.body as string)
  }
}
