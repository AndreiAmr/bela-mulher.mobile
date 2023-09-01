import React from 'react';

import * as S from './styled';
import { styledTheme } from '../../../infra/packages/styledComponents/theme';
import { ActivityIndicator } from 'react-native';

interface ButtonProps {
  label: string;
  onPress(): void;
  color?: keyof typeof styledTheme.colors;

  testId?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button = ({
  label,
  onPress,
  color,
  testId,
  disabled,
  isLoading,
}: ButtonProps) => {
  return (
    <S.Container
      onPress={onPress}
      color={color}
      testID={testId}
      disabled={disabled || isLoading}>
      {isLoading ? (
        <ActivityIndicator size="large" color={'#fff'} />
      ) : (
        <S.Label>{label}</S.Label>
      )}
    </S.Container>
  );
};

export default Button;
