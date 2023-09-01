/* eslint-disable no-undef */
require('@testing-library/jest-dom');

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
