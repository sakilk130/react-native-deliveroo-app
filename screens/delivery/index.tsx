import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { XIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../../app/features/restaurantSlice';
import SafeViewAndroid from '../../utils/SafeViewAndroid';

const DeliveryScreen = () => {
  const navigation: any = useNavigation();

  const restaurant = useSelector(selectRestaurant);

  return (
    <SafeAreaView
      className="flex-1"
      style={SafeViewAndroid('#00CCBB').AndroidSafeArea}
    >
      <View className="p-4 flex-row justify-between items-center">
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <XIcon color="white" size={30} />
        </TouchableOpacity>
        <Text className="text-white text-lg">Order Help</Text>
      </View>
      <View className="p-4">
        <View className="bg-white p-4 rounded-md">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-lg text-slate-400">Estimate Arrival</Text>
              <Text className="text-3xl font-extrabold mb-1">
                45-55 Minutes
              </Text>
              <Progress.Bar width={150} color="#00CCBB" indeterminate={true} />
            </View>
            <Image
              source={require('../../assets/orderLoading.gif')}
              className="w-20 h-20"
            />
          </View>
          <Text className="text-slate-400 mt-1">
            Your order at {restaurant.title} is being prepared.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeliveryScreen;
