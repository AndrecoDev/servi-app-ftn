export interface IAuthState {
  token: string | null;
  user: {
    name: string;
    email: string;
  } | null;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
}
