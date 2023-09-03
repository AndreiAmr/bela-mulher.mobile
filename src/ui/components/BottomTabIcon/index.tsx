import { useNavigation } from '@react-navigation/native';
import { Text } from 'native-base';

import { useTheme } from 'styled-components/native';

import React, { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';

// import * as S from './styled';
import Animated, {
  useSharedValue,
  Easing,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome';

interface BottomTabIconProps {
  label: string;

  onPress(): void;
}

const BottomTabIcon = ({ label, onPress }: BottomTabIconProps) => {
  const theme = useTheme();

  const marginBottom = useSharedValue(40);
  const borderWidth = useSharedValue(0);
  const borderRadius = useSharedValue(0);

  const navigation = useNavigation();

  const isFocused = navigation.isFocused();

  const animatedStyle = useAnimatedStyle(() => ({
    marginTop: -marginBottom.value,
    borderWidth: borderWidth.value,
    borderRadius: borderRadius.value,
  }));

  useLayoutEffect(() => {
    if (isFocused) {
      marginBottom.value = withTiming(30, {
        duration: 250,
        easing: Easing.back(),
      });
      borderWidth.value = withDelay(
        250,
        withTiming(5, {
          duration: 125,
          easing: Easing.back(),
        }),
      );
      borderRadius.value = withTiming(RFValue(22.5), {
        duration: 250,
        easing: Easing.back(),
      });
    } else {
      borderWidth.value = withTiming(0, {
        duration: 250,
        easing: Easing.back(),
      });
      marginBottom.value = withTiming(0, {
        duration: 250,
        easing: Easing.back(),
      });
      borderRadius.value = withTiming(0, {
        duration: 250,
        easing: Easing.back(),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={[
          animatedStyle,
          {
            width: RFValue(45),
            height: RFValue(45),

            marginLeft: 5,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#fff',
            backgroundColor: theme.colors.purple,
            // padding: 10,
            marginHorizontal: RFValue(30),
          },
        ]}>
        <Icon name="list-alt" />
        <Text
          style={{
            fontSize: RFValue(10),
            width: 80,
            textAlign: 'center',
          }}>
          {!isFocused && label}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default BottomTabIcon;
