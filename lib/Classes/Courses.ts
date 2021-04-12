import { BaseCollection } from './BaseCollection';

// Classes
import { Assignments } from './Assignments';

// Types
import { Course } from '../Types/Course';
import { Client } from '../Client';

export interface ICourse extends Course {
  assignments?: Assignments
}

export class Courses extends BaseCollection<ICourse> {
  private client: Client

  constructor(client: Client) {
    super()
    this.client = client
  }

  async collect(courses: ICourse[]) {
    for (let value of courses) {
      value.assignments = new Assignments(this.client)

      // fetch assignments of course
      const fetched = await this.client.rest.get(`/courses/${value.id}/assignments`)

      for (let assignment of fetched) {
        value.assignments.collect(assignment.id, assignment)
      }
      
      super.set(value.id, value)
    }
  }
  // TODO: add actions
}