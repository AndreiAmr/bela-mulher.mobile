import { View } from 'native-base';
import React from 'react';
import { Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';

interface InputProps {
  value: string;
  onChange(value: string): void;
  placeholder: string;
  label: string;
  secureTextEntry?: boolean;
  error?: string;
}

const Input = ({
  label,
  placeholder,
  value,
  onChange,
  secureTextEntry,
  error,
}: InputProps) => {
  const theme = useTheme();

  return (
    <View>
      <TextInput
        secureTextEntry={secureTextEntry}
        label={label}
        outlineColor={theme.colors.gray}
        selectionColor={theme.colors.purple}
        underlineColor="#0f0"
        cursorColor="#00f"
        activeOutlineColor={theme.colors.main}
        activeUnderlineColor="#f0f"
        mode="outlined"
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
      />
      <Text
        style={{
          fontSize: RFValue(10),
          marginTop: 5,
        }}>
        {error}
      </Text>
    </View>
  );
};

export default Input;
