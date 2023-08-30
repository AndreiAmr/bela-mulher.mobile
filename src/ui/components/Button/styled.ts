import { css, styled } from 'styled-components/native';
import { styledTheme } from '../../../infra/packages/styledComponents/theme';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  color?: keyof typeof styledTheme.colors;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  background: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.main};

  border-radius: ${RFValue(10)}px;
  height: 50px;
  width: 100%;

  align-items: center;
  justify-content: center;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}
`;

export const Label = styled.Text`
  color: #fff;
  font-size: ${RFValue(16)}px;
  font-weight: medium;
`;
