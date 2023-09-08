import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { Shadow } from 'react-native-shadow-2';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.onboarding_background};
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;

  color: ${({ theme }) => theme.colors.main};
  margin-top: 18px;
  font-family: 'Ubuntu-Bold';
  /* border-width: 1px; */

  /* margin-bottom: 40%; */
`;
export const Description = styled.Text`
  font-size: ${RFValue(11)}px;
  /* font-weight: medium; */
  color: ${({ theme }) => theme.colors.gray};
  /* margin-top: 18px; */
  margin-bottom: 40%;
  font-family: 'Ubuntu-Bold';

  font-family: 'Ubuntu-Regular';
`;

export const OptionsContainer = styled.View`
  position: absolute;
  bottom: 0px;
  height: 30%;
  width: 100%;
`;

export const OptionsContent = styled(Shadow)`
  height: 100%;
  width: 100%;
  background: white;
  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.borderRadius};
  padding-horizontal: 39px;
  gap: 20px;

  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 30%;
`;
