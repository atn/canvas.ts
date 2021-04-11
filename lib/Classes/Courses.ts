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

  async collect(key: string | number, value: ICourse) {
    value.assignments = new Assignments(this.client)

    // fetch assignments of course
    const fetched = await this.client.rest.get(`/courses/${value.id}/assignments`)

    for (let assignment of fetched) {
      value.assignments.collect(assignment.id, assignment)
    }
      
    return super.set(key, value)
  }
  // TODO: add actions
}