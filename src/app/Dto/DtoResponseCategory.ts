export interface DtoResponseCategory {
  current_page:   number;
  data:           ResponseCategory[];
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

export interface ResponseCategory {
  id:         number;
  name:       string;
  client_id:  number;
  created_at: Date;
  updated_at: Date;
}

export interface Link {
  url:    null | string;
  label:  string;
  active: boolean;
}
