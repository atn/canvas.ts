import FormData from 'form-data'
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

  async create(subject: string, body: string, recipients: string[]): Promise<Conversation> {
    const form = new FormData()
    form.append('subject', subject)
    form.append('body', body)

    for (let recipient of recipients) {
      form.append('recipients[]', recipient)
    }

    const res = await this.client.rest.post('/conversations', form)
    this.collect(res)

    return res
  }
}