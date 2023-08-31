import { UserProps } from './user';

export interface UserReducerStateData {
  user: UserProps | null;
  token: string | null;
}
