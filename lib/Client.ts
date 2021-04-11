import { EventEmitter } from 'events'

// Classes
import { Todo } from './Classes/Todo'
import { Courses } from './Classes/Courses'

// Rest
import { Rest } from './Rest'

// Types
import { User } from './Types/User'
import { ICourse } from './Classes/Courses'

export interface Client {
  rest: Rest
  user: User
  todo: Todo
  courses: Courses
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

    // fetch user info
    const user = await this.fetchUser()

    this.user = user.self
    for (let course of user.courses) {
      // wait b/c has to fetch assignments
      await this.courses.collect(course.id, course)
    }

    this.emit('connect')
  }

  private fetchUser = async () => {
    const self = await this.rest.get<User>('/users/self')
    const courses = await this.rest.get<ICourse[]>('/courses')

    return { courses, self }
  }
}