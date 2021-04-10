export interface TodoItem {
  context_type: string;
  course_id: number;
  type: string;
  ignore: string;
  ignore_permanently: string;
  assignment: Assignment;
  html_url: string;
}

interface Assignment {
  id: number;
  description: string;
  due_at: string;
  unlock_at?: null;
  lock_at?: null;
  points_possible: number;
  grading_type: string;
  assignment_group_id: number;
  grading_standard_id?: null;
  created_at: string;
  updated_at: string;
  peer_reviews: boolean;
  automatic_peer_reviews: boolean;
  position: number;
  grade_group_students_individually: boolean;
  anonymous_peer_reviews: boolean;
  group_category_id?: null;
  post_to_sis: boolean;
  moderated_grading: boolean;
  omit_from_final_grade: boolean;
  intra_group_peer_reviews: boolean;
  anonymous_instructor_annotations: boolean;
  anonymous_grading: boolean;
  graders_anonymous_to_graders: boolean;
  grader_count: number;
  grader_comments_visible_to_graders: boolean;
  final_grader_id?: null;
  grader_names_visible_to_final_grader: boolean;
  allowed_attempts: number;
  secure_params: string;
  course_id: number;
  name: string;
  submission_types?: (string)[] | null;
  has_submitted_submissions: boolean;
  due_date_required: boolean;
  max_name_length: number;
  in_closed_grading_period: boolean;
  is_quiz_assignment: boolean;
  can_duplicate: boolean;
  original_course_id?: null;
  original_assignment_id?: null;
  original_assignment_name?: null;
  original_quiz_id?: null;
  workflow_state: string;
  muted: boolean;
  html_url: string;
  published: boolean;
  only_visible_to_overrides: boolean;
  locked_for_user: boolean;
  submissions_download_url: string;
  post_manually: boolean;
  anonymize_students: boolean;
  require_lockdown_browser: boolean;
}
