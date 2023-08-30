import React from 'react';

import * as S from './styled';
import { styledTheme } from '../../../infra/packages/styledComponents/theme';

interface ButtonProps {
  label: string;
  onPress(): void;
  color?: keyof typeof styledTheme.colors;
  testId?: string;
  disabled?: boolean;
}

const Button = ({ label, onPress, color, testId, disabled }: ButtonProps) => {
  return (
    <S.Container
      onPress={onPress}
      color={color}
      testID={testId}
      disabled={disabled}>
      <S.Label>{label}</S.Label>
    </S.Container>
  );
};

export default Button;
