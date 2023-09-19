import React, { useRef } from 'react';
import { Image } from 'native-base';
import { Modalize } from 'react-native-modalize';

import BackgroundImage from '../../assets/images/background-image.jpg';
import OrImage from '../../assets/images/or.png';
import * as S from './styled';

import Button from '../../components/Button';

import LoginBottomSheet from './components/LoginBottomSheet';

const OnBoarding = () => {
  const modalRef = useRef<Modalize>(null);

  const handleOpenModal = (): void => {
    modalRef.current?.open();
  };

  return (
    <S.Container testID="onboarding-container">
      <S.Image source={BackgroundImage} />
      <S.Title>Espaço Bela Mulher</S.Title>

      <S.Description>
        Gerencie seus agendamentos de forma fácil e prática!
      </S.Description>

      <S.OptionsContainer>
        <S.OptionsContent>
          <Button
            label="Login"
            onPress={handleOpenModal}
            testId="login-button"
          />
          <Image source={OrImage} />
          <Button
            label="Cadastre-se"
            onPress={handleOpenModal}
            color="purple"
          />
        </S.OptionsContent>
      </S.OptionsContainer>

      <LoginBottomSheet ref={modalRef} />
    </S.Container>
  );
};

export default OnBoarding;
