export interface User {
  id: string;
  name: string;
  email: string;
  checkbox: boolean;
  role: string;
}

export interface UserMutation {
  name: string;
  email: string;
  checkbox: boolean;
  role: string;
}