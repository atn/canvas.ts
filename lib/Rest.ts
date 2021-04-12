import fetch from 'node-fetch'
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
      
      let headers = {'content-type': 'application/json', 'Authorization': `Bearer ${this.client.auth}`}

      const res = await fetch(url, { method, body: method != 'get' ? JSON.stringify(data) : JSON.stringify({}), headers})

      // TODO: better error handling
      return await res.json()
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