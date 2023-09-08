import { useNavigation } from '@react-navigation/native';
import { Text } from 'native-base';

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
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

const icons = {
  home: 'home',
  calendar: 'calendar',
  addUser: 'user-plus',
  newSchedule: 'calendar-plus-o',
};

interface BottomTabIconProps extends BottomTabBarButtonProps {
  label: string;
  iconName: keyof typeof icons;
  onPress?(): void;
}
const BottomTabIcon = ({ label, iconName, ...props }: BottomTabIconProps) => {
  // const theme = useTheme();

  const marginBottom = useSharedValue(0);
  const borderWidth = useSharedValue(0);
  const borderRadius = useSharedValue(0);
  const labelHeight = useSharedValue(20);
  const labelOpacity = useSharedValue(1);
  const navigation = useNavigation();

  const isFocused = navigation.isFocused();

  const animatedStyle = useAnimatedStyle(() => ({
    marginTop: -marginBottom.value,
    borderWidth: borderWidth.value,
    borderRadius: borderRadius.value,
  }));

  const textAnimatedStyle = useAnimatedStyle(() => ({
    height: labelHeight.value,
    opacity: labelOpacity.value,
  }));

  useLayoutEffect(() => {
    if (isFocused) {
      marginBottom.value = withTiming(30, {
        duration: 250,
        easing: Easing.back(),
      });
      borderWidth.value = withDelay(
        250,
        withTiming(2, {
          duration: 125,
          easing: Easing.back(),
        }),
      );
      borderRadius.value = withTiming(RFValue(22.5), {
        duration: 250,
        easing: Easing.back(),
      });

      labelHeight.value = withTiming(0);
      labelOpacity.value = withTiming(0);
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
      labelHeight.value = withTiming(20);
      labelOpacity.value = withDelay(500, withTiming(1));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        flex: 0.5,

        alignItems: 'center',
      }}>
      <Animated.View
        style={[
          animatedStyle,
          {
            width: RFValue(45),
            height: RFValue(45),

            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#fff',
            backgroundColor: '#143F6B',
            // padding: 10,
            // marginHorizontal: RFValue(30),
          },
        ]}>
        <Icon
          name={icons[iconName]}
          size={isFocused ? RFValue(16) : RFValue(11)}
          color={isFocused ? '#FFF' : '#FFFFFF90'}
        />
        <Animated.View style={[textAnimatedStyle]}>
          <Text
            style={{
              fontSize: RFValue(10),
              width: 80,
              textAlign: 'center',
              color: '#FFFFFF90',
            }}>
            {label}
          </Text>
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default BottomTabIcon;
