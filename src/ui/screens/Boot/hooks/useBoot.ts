import { useNavigation } from '@react-navigation/native';
import storage from '../../../../infra/packages/storage';
import verifyToken from '../../../../infra/services/verify-token';

import useAuth from '../../../../infra/hooks/useAuth';
import getProfile from '../../../../infra/services/get-profile';

const useBoot = () => {
  const { handleLogin } = useAuth();

  const navigation = useNavigation();

  const init = async () => {
    try {
      const token = await storage.load({
        key: 'bm-access',
      });

      const user = await getProfile(token);

      console.log(user);
      handleLogin(token, user);

      await verifyToken(token);

      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Authenticated' }] as any,
        });
      }, 3000);
    } catch (err) {
      console.log(err);
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Auth' }] as any,
        });
      }, 3000);
    }
  };

  return {
    init,
  };
};

export default useBoot;
