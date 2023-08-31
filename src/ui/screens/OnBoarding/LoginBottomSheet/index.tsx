import React, { forwardRef } from 'react';

import { Modalize } from 'react-native-modalize';
import { Modal, useDisclose } from 'native-base';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import useLogin from './useLogin';
import * as S from './styles';

const LoginBottomSheet = forwardRef<Modalize>((props, ref) => {
  const {
    items: { email, password, isLoading },
    handlers: { handleChange, handleSubmit },
    errors,
  } = useLogin();
  const { isOpen, onClose } = useDisclose();

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
        <Button
          label="Entrar"
          onPress={async () => {
            await handleSubmit();
          }}
          color="purple"
          isLoading={isLoading}
        />
      </S.ContentContainer>

      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Content maxWidth="400px">
          <Modal.Header>Autenticado com sucesso!</Modal.Header>
        </Modal.Content>
      </Modal>
    </Modalize>
  );
});

export default LoginBottomSheet;
