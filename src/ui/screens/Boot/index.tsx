import React, { useEffect } from 'react';
import { View } from 'native-base';
import Lottie from 'lottie-react-native';
import LoadingAnimation from '../../assets/animations/loading-animation.json';
import { RFValue } from 'react-native-responsive-fontsize';
import useBoot from './hooks/useBoot';

const Boot = () => {
  const { init } = useBoot();

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View
      flex={1}
      alignItems="center"
      justifyContent="center"
      background="white">
      <Lottie
        source={LoadingAnimation}
        autoPlay
        style={{
          height: RFValue(130),
          width: '100%',
        }}
        loop
      />
    </View>
  );
};

export default Boot;
