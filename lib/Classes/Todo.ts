import { Client } from '../Client'
import { TodoItem } from '../Types/Todo'

export class Todo {
  private client: Client

  constructor(client: Client) {
    this.client = client
  }

  get = async (): Promise<TodoItem[]> => {
    const res = await this.client.rest.get('/users/self/todo')

    return res
  }
}