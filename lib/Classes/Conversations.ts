import { BaseCollection } from './BaseCollection'

// Types
import { Conversation } from '../Types/Conversation'
import { Client } from '../Client'

export class Conversations extends BaseCollection<Conversation> {
  private client: Client

  constructor(client: Client) {
    super()
    this.client = client
  }

  collect(conversations: Conversation[]) {
    for (let value of conversations) {
      super.set(value.id, value)
    }
  }
}