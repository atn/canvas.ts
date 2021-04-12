import { EventEmitter } from 'events'

// Classes
import { Todo } from './Classes/Todo'
import { Courses } from './Classes/Courses'
import { Conversations } from './Classes/Conversations'

// Rest
import { Rest } from './Rest'

// Types
import { User } from './Types/User'
import { Conversation } from './Types/Conversation'
import { ICourse } from './Classes/Courses'

export interface Client {
  rest: Rest
  user: User
  todo: Todo
  courses: Courses
  conversations: Conversations
  auth: string
  domain: string

  on(event: 'connect', listener: () => void): this;
}

export class Client extends EventEmitter {
  constructor() {
    super()
  }

  /**
  * @param auth - Users canvas authorization bearer token
  * @param domain - Users canvas domain (e.g. school.instructure.com) 
  */
  async connect (auth: string, domain: string): Promise<void> {
    this.auth = auth
    this.domain = domain

    // init classes
    this.rest = new Rest(this)
    this.todo = new Todo(this)
    this.courses = new Courses(this)
    this.conversations = new Conversations(this)

    // fetch user info
    const user = await this.fetchUser()

    this.user = user.self
    this.conversations.collect(user.conversations)
    await this.courses.collect(user.courses)

    this.emit('connect')
  }

  private fetchUser = async () => {
    const self = await this.rest.get<User>('/users/self')
    const courses = await this.rest.get<ICourse[]>('/courses')
    const conversations = await this.rest.get<Conversation[]>('/conversations')

    return { courses, self, conversations }
  }
}