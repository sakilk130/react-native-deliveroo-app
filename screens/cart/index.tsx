import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from '../../app/features/cartSlice';
import { selectRestaurant } from '../../app/features/restaurantSlice';
import { IRestaurant } from '../../interfaces';
import { urlFor } from '../../sanity.config';
import SafeViewAndroid from '../../utils/SafeViewAndroid';

const CartScreen = () => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();

  const [groupedItems, setGroupedItems] = useState<any>([]);

  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const deliveryFee = cartTotal > 500 ? 0 : 70;

  useEffect(() => {
    const groupedItems = items.reduce((results: any, item: IRestaurant) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {});

    setGroupedItems(groupedItems);
  }, [items.length]);

  return (
    <SafeAreaView style={SafeViewAndroid().AndroidSafeArea}>
      <View className="p-4 flex-row items-center shadow-md border-b-2 border-[#00CCBB]">
        <View className="pl-4 flex-1">
          <Text className="text-center text-lg font-extrabold">Cart</Text>
          <Text className="text-center text-slate-400">
            {restaurant?.title}
          </Text>
        </View>

        <TouchableOpacity onPress={navigation.goBack}>
          <View className="pr-4 rounded-full">
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </View>
        </TouchableOpacity>
      </View>

      <View className="bg-gray-200 h-full">
        <View className="mt-4 mb-4 flex-row justify-between items-center bg-white p-4">
          <View className="flex-row gap-3 items-center">
            <Image
              source={{
                uri: urlFor(restaurant.imgUrl).url(),
              }}
              className="h-7 w-7 rounded-full"
            />
            <Text>Deliver in 50-70 min</Text>
          </View>
          <Text className="text-[#00CCBB]">Change</Text>
        </View>
        <ScrollView className="divide-y divide-gray-200 mb-4">
          {Object.entries(groupedItems).map(([key, items]: any) => (
            <View
              key={key}
              className="flex-row justify-between items-center bg-white p-4"
            >
              <View className="flex-row gap-3 items-center">
                <Text>{items.length} x</Text>
                <Image
                  source={{ uri: urlFor(items[0]?.image).url() }}
                  className="h-8 w-8 rounded-full"
                />
                <Text>{items[0]?.name}</Text>
              </View>
              <View className="flex-row gap-3">
                <Text className="text-slate-400">${items[0].price}</Text>
                <Text
                  className="text-[#00CCBB]"
                  onPress={() => dispatch(removeFromCart({ _id: key }))}
                >
                  Remove
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <View className="p-4 mb-20 bg-white space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">${cartTotal}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">${deliveryFee}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="">Order Total</Text>
            <Text className="font-extrabold">${deliveryFee + cartTotal}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('PrepareOrder')}>
            <View className="bg-[#00CCBB] rounded-lg p-3">
              <Text className="text-center text-white text-lg font-bold">
                Place Order
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
