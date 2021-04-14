import fetch, { FetchError } from 'node-fetch'
import { exception } from 'node:console';
import { Client } from './Client'

// https://github.com/hivenapp/hiven.js

interface RestCreate {
  method: 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head'
  path: string
  data: any
}

export class Rest {
  private client: Client

  constructor(client: Client) {
    this.client = client;
  }
  
  create = async ({method, path, data}: RestCreate) => {
    try {
      const url = `https://${this.client.domain}/api/v1${path}`
      
      let headers = {'Authorization': `Bearer ${this.client.auth}`}

      const res = await fetch(url, { method, body: method != 'get' ? data : null, headers})
      const json = await res.json()

      // TODO: better error handling
      if (!res.ok) throw new Error(`CanvasAPIError: ${res.status} - ${res.statusText} on ${method.toUpperCase()} ${path}. Response: ${JSON.stringify(json)}`)

      return json
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  async get<T = any>(path: string, data = {}): Promise<T> {
    return await this.create({method: 'get', path, data})
  }

  async post<T = any>(path: string, data = {}): Promise<T> {
    return await this.create({method: 'post', path, data})
  }
}