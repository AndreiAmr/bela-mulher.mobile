import { useState } from 'react';
import { useFormik } from 'formik';

import * as yup from 'yup';

import useAuth from '../../../../../../infra/hooks/useAuth';
import userLogin, {
  UserLoginData,
} from '../../../../../../infra/services/user-login';
import { useNavigation } from '@react-navigation/native';
import { HTTPErrorsResponse } from '../../../../../../infra/http/errors';

import { useDisclose } from 'native-base';
import storage from '../../../../../../infra/packages/storage';

interface DialogInfosProps {
  title: string;
  description: string;
}

const validationSchema = yup.object({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatório'),
});

const useLogin = () => {
  const { handleLogin } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { navigate } = useNavigation();
  const [dialogInfos, setDialogInfos] = useState<DialogInfosProps>();
  const { isOpen, onClose, onOpen } = useDisclose();

  const handleSubmitFN = async (prop: UserLoginData): Promise<void> => {
    try {
      setIsLoading(true);
      const { token, user } = await userLogin({
        email: prop.email,
        password: prop.password,
      });

      await handleLogin(token, user);
      await storage.save({
        key: 'bm-access',
        data: token,
      });
      navigate('Authenticated');
      setIsLoading(false);
    } catch (err: any) {
      const error = String(err.message);

      switch (error) {
        case HTTPErrorsResponse.INVALID_PASSWORD: {
          setDialogInfos({
            title: 'Senha incorreta!',
            description: 'Verifique sua senha e tente novamente!',
          });
          break;
        }

        case HTTPErrorsResponse.USER_NOT_FOUND: {
          setDialogInfos({
            title: 'E-mail não cadastrado!',
            description: 'Verifique o email informado e tente novamente!',
          });
          break;
        }

        default: {
          setDialogInfos({
            title: 'E-mail não cadastrado!',
            description: 'Verifique o email informado e tente novamente!',
          });
          break;
        }
      }

      onOpen();
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

  return {
    items: {
      email: values.email,
      password: values.password,
      isLoading,
      dialogInfos,
      isModalOpen: isOpen,
    },

    handlers: {
      handleChange,
      handleSubmit,
      onCloseModal: onClose,
      handleChangeIsLoading: setIsLoading,
    },
    errors,
  };
};

export default useLogin;
