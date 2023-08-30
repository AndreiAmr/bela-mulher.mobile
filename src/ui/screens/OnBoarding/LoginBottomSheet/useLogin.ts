import { useFormik } from 'formik';

import * as yup from 'yup';
import http from '../../../../infra/http';
import { Alert } from 'react-native';

const validationSchema = yup.object({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatório'),
});

const handleSubmitFN = async (
  email: string,
  password: string,
): Promise<void> => {
  try {
    const { data: user } = await http.post('/api/professional/login', {
      email,
      password,
    });

    console.log(user);

    Alert.alert('passed');
  } catch (err: any) {
    Alert.alert(err.message);
    console.log(JSON.stringify(err));
  }
};

const useLogin = () => {
  const { values, handleSubmit, handleChange, errors } = useFormik({
    validationSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: ({ email, password }) => handleSubmitFN(email, password),
    validateOnChange: false,
  });

  console.log(errors);

  return {
    items: {
      email: values.email,
      password: values.password,
    },

    handlers: {
      handleChange,
      handleSubmit,
    },
    errors,
  };
};

export default useLogin;
