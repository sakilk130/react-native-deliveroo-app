import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { SafeAreaView } from 'react-native-safe-area-context';

const PrepareOrderScreen = () => {
  const navigation: any = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 3000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require('../../assets/orderLoading.gif')}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg px-4 my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="#fff" />
    </SafeAreaView>
  );
};

export default PrepareOrderScreen;
