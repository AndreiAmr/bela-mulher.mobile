import React from 'react';
import { View } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';

const Home = () => {
  return (
    <View background="#fff" flex={1}>
      <SafeAreaView>
        <Header label="Home" />
      </SafeAreaView>
    </View>
  );
};

export default Home;
