import { Assignment } from './Assignment'

export interface TodoItem {
  context_type: string;
  course_id: number;
  type: string;
  ignore: string;
  ignore_permanently: string;
  assignment: Assignment;
  html_url: string;
}