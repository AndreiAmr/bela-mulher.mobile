import React from 'react';
import { Text, View } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import useAuth from '../../../../infra/hooks/useAuth';
import { RFValue } from 'react-native-responsive-fontsize';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  const { user } = useAuth();

  return (
    <View background="#fff" flex={1}>
      <SafeAreaView>
        <Header label="Home" />
        <View px={`${RFValue(27)}px`}>
          <Text
            mt={`${RFValue(30)}px`}
            fontFamily="Ubuntu-Medium"
            color="#078B8A9F"
            fontSize={`${RFValue(16)}px`}>
            Olá,
          </Text>
          <Text
            fontFamily="Ubuntu-Medium"
            color="#078B8A"
            fontSize={`${RFValue(16)}px`}>
            {user?.name}!{'  '}
            <Icon name="hand-wave" size={RFValue(16)} color="#FFBD00" />
          </Text>
          <Text
            mt={`${RFValue(30)}px`}
            fontFamily="Ubuntu-Medium"
            color="#6F8888">
            Marcados para hoje
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
