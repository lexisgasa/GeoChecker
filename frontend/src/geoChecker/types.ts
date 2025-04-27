export interface RoleType {
  id: number;
  name: string;
  path: string;
}

export interface UserData {
  username: string;
  password: string;
}

export interface ModifyUserData {
  userId: string;
}

export interface ContactFormData {
  username: string;
  description: string;
}

export interface UserFullData {
  company: string;
  name: string;
  password: string;
}

export interface ActionType {
  id: number;
  name: string;
  path: string;
}

export interface CompanyData {
  name: string;
}

