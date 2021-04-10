import { Assignments } from 'Classes/Assignments';

export interface Course {
  id: number;
  name: string;
  account_id: number;
  uuid: string;
  start_at: string;
  grading_standard_id?: null;
  is_public: boolean;
  assignments: Assignments;
  created_at: string;
  course_code: string;
  default_view: string;
  root_account_id: number;
  enrollment_term_id: number;
  license: string;
  grade_passback_setting?: string | null;
  end_at?: string | null;
  public_syllabus: boolean;
  public_syllabus_to_auth: boolean;
  storage_quota_mb: number;
  is_public_to_auth_users: boolean;
  homeroom_course: boolean;
  apply_assignment_group_weights: boolean;
  calendar: Calendar;
  time_zone: string;
  blueprint: boolean;
  enrollments?: EnrollmentsEntity[] | null;
  hide_final_grades: boolean;
  workflow_state: string;
  restrict_enrollments_to_course_dates: boolean;
  overridden_course_visibility: string;
  course_format?: string | null;
}
export interface Calendar {
  ics: string;
}
export interface EnrollmentsEntity {
  type: string;
  role: string;
  role_id: number;
  user_id: number;
  enrollment_state: string;
  limit_privileges_to_course_section: boolean;
}
