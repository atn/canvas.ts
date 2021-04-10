import fetch from 'node-fetch'
import { Client } from './Client'

// https://github.com/hivenapp/hiven.js

interface RestCreate {
  method: 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head'
  path: string
  data: any
}

export class Rest {
  client: Client

  constructor(client: Client) {
    this.client = client;
  }
  
  create = async ({method, path, data}: RestCreate) => {
    try {
      const url = `https://${this.client.domain}/api/v1${path}`
      
      let headers = {'content-type': 'application/json', 'Authorization': `Bearer ${this.client.auth}`}

      const res = await fetch(url, { method, body: method != 'get' ? data : null, headers})

      // TODO: better error handling
      return await res.json()
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  get = async (path: string, data = {}) => {
    return await  this.create({method: 'get', path, data})
  }
}