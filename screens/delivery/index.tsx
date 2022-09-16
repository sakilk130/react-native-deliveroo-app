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
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
  const navigation: any = useNavigation();

  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-[#00CCBB]">
      <SafeAreaView className=" bg-[#00CCBB] z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <XIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45 -55 Minutes</Text>
            </View>
            <Image
              source={require('../../assets/orderLoading.gif')}
              className="w-20 h-20"
            />
          </View>
          <Progress.Bar width={150} color="#00CCBB" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        style={{
          height: '55%',
          width: '100%',
        }}
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className="z-0 -mt-10"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
        />
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28 bottom-0">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Sakil</Text>
          <Text className="text-gray-400">Your rider</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
