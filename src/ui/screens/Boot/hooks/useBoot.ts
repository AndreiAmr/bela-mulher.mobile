import { useNavigation } from '@react-navigation/native';
import storage from '../../../../infra/packages/storage';
import verifyToken from '../../../../infra/services/verify-token';

const useBoot = () => {
  const navigation = useNavigation();

  const init = async () => {
    try {
      const token = await storage.load({
        key: 'bm-access',
      });

      await verifyToken(token);

      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Authenticated' }] as any,
        });
      }, 3000);
    } catch (err) {
      //   console.log(err);
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
