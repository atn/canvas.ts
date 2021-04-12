export interface Conversation {
  id: number;
  subject: string;
  workflow_state: string;
  last_message: string;
  last_message_at: string;
  last_authored_message?: string | null;
  last_authored_message_at?: string | null;
  message_count: number;
  subscribed: boolean;
  private: boolean;
  starred: boolean;
  properties?: (string | null)[] | null;
  audience?: (number)[] | null;
  audience_contexts: AudienceContexts;
  avatar_url: string;
  participants?: (ParticipantsEntity)[] | null;
  visible: boolean;
  context_code: string;
  context_name: string;
}

interface AudienceContexts {
  courses: any;
  groups: any;
}

interface ParticipantsEntity {
  id: number;
  name: string;
  full_name: string;
  pronouns?: string | null;
}