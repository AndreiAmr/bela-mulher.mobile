import React from 'react';
import { Text, View, Button } from 'native-base';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const Home = () => {
  const width = useSharedValue(10);
  const style = useAnimatedStyle(() => ({
    width: width.value,
  }));

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <Text> Home</Text>

      <Button
        onPress={() => {
          width.value = withSpring(width.value + 10);
        }}
      />
      <Animated.View
        style={[
          style,
          {
            height: 100,
            backgroundColor: '#f00',
          },
        ]}
      />
    </View>
  );
};

export default Home;
