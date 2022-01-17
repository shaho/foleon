export interface Category {
  key: string;
  name: string;
}

export interface CategoryStateType {
  list: Category[];
  loading: boolean;
  error: boolean;
}
