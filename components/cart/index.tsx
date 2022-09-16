import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../app/features/cartSlice';

export default function Cart() {
  const navigation: any = useNavigation();

  const totalPrice = useSelector(selectCartTotal);
  const items = useSelector(selectCartItems);

  if (items.length === 0) {
    return null;
  }

  return (
    <View className="absolute bottom-5 z-50 p-4 w-full">
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <View className="bg-[#00CCBB] w-full p-4 rounded-lg flex-row justify-between items-center">
          <Text className="text-lg font-extrabold text-white bg-[#01A296] py-1 px-2 rounded-sm">
            {items.length}
          </Text>
          <Text className="text-lg text-white font-extrabold">View Cart</Text>
          <Text className="text-lg text-white font-extrabold">
            ${totalPrice}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
