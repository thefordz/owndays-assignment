export interface Registration {
  id: number;
  name: string;
  email: string;
  phone: string;
  branch: string;
  date: string;
  createdAt: string;
}

export interface Filters {
  name: string;
  branch: string;
  date: string;
}
