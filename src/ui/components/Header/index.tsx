import React from 'react';
import { Text, View } from 'native-base';
import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface HeaderProps {
  label: string;
}

const Header = ({ label = 'Home' }: HeaderProps) => {
  const { colors } = useTheme();

  return (
    <View
      borderBottomWidth={1}
      borderBottomColor={colors.green}
      py="10px"
      px="27px">
      <Text fontFamily="heading" color={colors.green} fontSize={RFValue(14)}>
        {' '}
        {label.toUpperCase()}
      </Text>
    </View>
  );
};

export default Header;
