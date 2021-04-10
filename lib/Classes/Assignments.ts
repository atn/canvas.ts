import { BaseCollection } from './BaseCollection';

// Types
import { Client } from '../Client';
import { Assignment } from '../Types/Assignment';

export class Assignments extends BaseCollection<Assignment> {
  private client: Client

  constructor(client: Client) {
    super()
    this.client = client
  }

  async collect (key: string | number, value: Assignment) {
    super.set(key, value)
    return super.get(key)
  }
}