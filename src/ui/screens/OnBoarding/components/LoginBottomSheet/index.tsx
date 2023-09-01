import React from 'react';

import { Modalize } from 'react-native-modalize';
import { Modal } from 'native-base';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import useLogin from './hooks/useLogin';
import * as S from './styles';

const LoginBottomSheet = React.forwardRef<Modalize>((props, ref) => {
  const {
    items: { email, password, isLoading, isModalOpen, dialogInfos },
    handlers: { handleChange, handleSubmit, onCloseModal },
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
        <Button
          label="Entrar"
          onPress={async () => {
            await handleSubmit();
          }}
          color="purple"
          isLoading={isLoading}
        />
      </S.ContentContainer>

      <Modal isOpen={isModalOpen} onClose={onCloseModal}>
        <Modal.Content maxWidth="400px">
          <Modal.Header>{dialogInfos?.title}</Modal.Header>
          <Modal.Body>{dialogInfos?.description}</Modal.Body>
        </Modal.Content>
      </Modal>
    </Modalize>
  );
});

export default LoginBottomSheet;
