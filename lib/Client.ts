import { EventEmitter } from 'events'

import { Rest } from './Rest'

interface Permissions {
  can_update_name: boolean;
  can_update_avatar: boolean;
  limit_parent_app_web_access: boolean;
}

export interface User {
  id: number;
  name: string;
  created_at: string;
  sortable_name: string;
  short_name: string;
  avatar_url: string;
  locale?: string;
  effective_locale: string;
  permissions: Permissions;
}

export interface Client {
  rest: Rest
  user: User
  auth: string
  domain: string

  on(event: 'connect', listener: () => void): this;
}

export class Client extends EventEmitter {
  constructor() {
    super()
  }

  connect = async (auth: string, domain: string) => {
    this.auth = auth
    this.domain = domain
    this.rest = new Rest(this)

    this.user = await this.rest.get('/users/self')
    this.emit('connect')
  }
}