export interface DtoResponseTypeUser {
  current_page:   number;
  data:           ResponseTypeUser[];
  first_page_url: string;
  from:           number;
  last_page:      number;
  last_page_url:  string;
  links:          Link[];
  next_page_url:  null;
  path:           string;
  per_page:       number;
  prev_page_url:  null;
  to:             number;
  total:          number;
}

export interface ResponseTypeUser {
  id:         number;
  name:       string;
  created_at?: Date;
  updated_at?: Date;
}

export interface Link {
  url:    null | string;
  label:  string;
  active: boolean;
}
