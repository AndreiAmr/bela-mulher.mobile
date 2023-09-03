import Storage from 'react-native-storage';
/* eslint-disable no-undef */
require('@testing-library/jest-dom');
require('@testing-library/jest-native/extend-expect');

// jest.mock()

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: jest.fn(),
}));

jest.mock('react-native-responsive-fontsize', () => ({
  RFValue: jest.fn(prop => prop),
}));

jest.mock('react-native-shadow-2', () => ({
  Shadow: jest.fn(),
}));

jest.mock('react-native-modalize', () => ({
  Modalize: jest.fn(),
}));

jest.mock('react-native-gesture-handler', () => ({
  GestureHandlerRootView: jest.fn(),
}));
jest.mock('@react-native-async-storage/async-storage', () => ({
  AsyncStorage: jest.fn(),
}));
jest.mock('react-native-storage');

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({
    navigate: jest.fn(),
  })),
  NavigationContainer: jest.fn(),
}));
jest.mock('@react-navigation/bottom-tabs', () => ({
  createBottomTabNavigator: jest.fn(),
}));
jest.mock('react-native-reanimated', () => ({
  useAnimatedStyle: jest.fn(),
  useSharedValue: jest.fn(),
  withSpring: jest.fn(),
}));
jest.mock('react-native-vector-icons/FontAwesome', () => jest.fn());

// jest.mock('styled-components/native', () => {
//   let mocks = {
//     TouchableOpacity: jest.fn(),
//     View: jest.fn(),
//     Text: jest.fn(),
//     default: jest.fn(() => mocks),
//   };

//   return mocks;
// });
