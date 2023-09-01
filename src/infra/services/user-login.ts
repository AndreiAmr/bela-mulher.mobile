import http from '../http';
import { UserProps } from '../types/user';

export interface UserLoginData {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  token: string;
  user: UserProps;
}

const userLogin = async ({ email, password }: UserLoginData) => {
  try {
    const { data: user } = await http.post<UserLoginResponse>(
      '/api/professional/login',
      {
        email,
        password,
      },
    );

    return user;
  } catch (err: any) {
    const message = JSON.stringify(err.response.data.message);
    throw new Error(message);
  }
};

export default userLogin;
