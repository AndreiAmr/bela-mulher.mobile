import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const TextTE = styled.Text`
  color: ${({ theme }) => theme.colors.main};
`;

const OnBoarding = () => {
  return (
    <View>
      <TextTE>IOa</TextTE>
    </View>
  );
};

export default OnBoarding;
