import { ActionReturnData } from '../../types/action';
import { UserProps } from '../../types/user';

export const USER_LOGIN = 'USER_LOGIN';

export function setUser(user: UserProps): ActionReturnData<UserProps> {
  return {
    type: USER_LOGIN,
    payload: user,
  };
}
