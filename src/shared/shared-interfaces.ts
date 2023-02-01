export interface IInitialState {
  fetchEntitiesSuccess: boolean;
  fetchEntitySuccess: boolean;
  updateEntitySuccess: boolean;
  deleteEntitySuccess: boolean;
  loading: boolean;
  errorMessage: string | null;
  totalItems: number;
}

export interface IParams {
  limit: number;
  page: number;
  sort?: string;
  key?: string;
}

export interface ICusSelectOptions {
  label?: string;
  value?: number | string;
  id?: number;
  name?: string;
}

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface MetaNoti {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
  countNotSeen: number;
}

export interface Links {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface IResponse<T> {
  items: T;
  meta: Meta;
  links: Links;
}

export interface INotiResponse<T> {
  items: T;
  meta: MetaNoti;
  links: Links;
}
