export interface Publication {
  identifier: string;
  id: number;
  name: string;
  category: string;
  level: string;
  created_on: Date;
}

export interface PublicationStateType {
  list: Publication[];
  selectedItem: Publication;
  pageCount: number;
  currentPage: number;
  totalPages: number;
  filter: string;
  loading: boolean;
  error: boolean;
}
