export interface DtoResponseUser {
  current_page:   number;
  data:           ResponseUser[];
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

export interface ResponseUser {
  id:              number;
  name:            string;
  name_restaurant: string;
  address:         string;
  phone:           string;
  email:           string;
  password:        string;
  type_user:       string;
  created_at?:      Date;
  updated_at?:      Date;
}

export interface Link {
  url:    null | string;
  label:  string;
  active: boolean;
}
