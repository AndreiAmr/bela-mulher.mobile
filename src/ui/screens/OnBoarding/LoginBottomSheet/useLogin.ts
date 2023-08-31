import { useState } from 'react';
import { useFormik } from 'formik';

import * as yup from 'yup';

import useAuth from '../../../../infra/hooks/useAuth';
import userLogin, {
  UserLoginData,
} from '../../../../infra/services/user-login';
import { useNavigation } from '@react-navigation/native';

const validationSchema = yup.object({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatório'),
});

const useLogin = () => {
  const { handleLogin } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { navigate } = useNavigation();

  const handleSubmitFN = async (prop: UserLoginData): Promise<void> => {
    try {
      setIsLoading(true);
      const { token, user } = await userLogin({
        email: prop.email,
        password: prop.password,
      });

      await handleLogin(token, user);
      navigate('Home');
      setIsLoading(false);
    } catch (err: any) {
      console.log(JSON.stringify(err));
      setIsLoading(false);
    }
  };

  const { values, handleSubmit, handleChange, errors } = useFormik({
    validationSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleSubmitFN,
    validateOnChange: false,
  });

  console.log(errors);

  return {
    items: {
      email: values.email,
      password: values.password,
      isLoading,
    },

    handlers: {
      handleChange,
      handleSubmit,
      handleChangeIsLoading: setIsLoading,
    },
    errors,
  };
};

export default useLogin;
