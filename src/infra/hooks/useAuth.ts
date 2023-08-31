import { useSelector, useDispatch } from 'react-redux';
import { UserProps } from '../types/user';
import { clearUser, userLogin } from '../redux/slices/user-slice';

interface AuthLoginPayloadData {
  user: UserProps;
  token: string;
}

const useAuth = () => {
  const user = useSelector<{ user: UserProps }>(
    state => state.user,
  ) as UserProps | null;
  const dispatch = useDispatch();

  const handleLogin = async (token: string, userProps: UserProps) => {
    const payload: AuthLoginPayloadData = {
      token,
      user: userProps,
    };

    await dispatch(userLogin(payload));
  };

  const handleClear = async () => {
    await dispatch(clearUser());
  };

  return {
    user,
    handleLogin,
    handleClear,
  };
};

export default useAuth;
