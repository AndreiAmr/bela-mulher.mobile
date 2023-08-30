import React, { forwardRef } from 'react';

import { Modalize } from 'react-native-modalize';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import useLogin from './useLogin';
import * as S from './styles';

const LoginBottomSheet = forwardRef<Modalize>((props, ref) => {
  const {
    items: { email, password },
    handlers: { handleChange, handleSubmit },
    errors,
  } = useLogin();

  return (
    <Modalize ref={ref} snapPoint={300} avoidKeyboardLikeIOS>
      <S.ContentContainer>
        <Input
          onChange={handleChange('email')}
          value={email}
          label="E-mail"
          placeholder="Digite seu e-mail"
          error={errors.email}
        />
        <Input
          onChange={handleChange('password')}
          value={password}
          label="Senha"
          placeholder="Digite sua senha"
          error={errors.password}
          secureTextEntry
        />
        <S.Divider />
        <Button label="Entrar" onPress={handleSubmit} color="purple" />
      </S.ContentContainer>
    </Modalize>
  );
});

export default LoginBottomSheet;
