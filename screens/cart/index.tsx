import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, selectCartItems } from '../../app/features/cartSlice';
import { selectRestaurant } from '../../app/features/restaurantSlice';
import { IRestaurant } from '../../interfaces';
import { urlFor } from '../../sanity.config';

const CartScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [groupedItems, setGroupedItems] = useState<any>([]);

  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectCartItems);

  useEffect(() => {
    const groupedItems = items.reduce((results: any, item: IRestaurant) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {});

    setGroupedItems(groupedItems);
  }, [items.length]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
      }}
    >
      <View className="pb-4 flex-row items-center shadow-md border-b-2 border-[#00CCBB]">
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
                uri: 'https://images.unsplash.com/photo-1662368298353-9bbb868acdd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
              }}
              className="h-7 w-7 rounded-full"
            />
            <Text>Deliver in 50-70 min</Text>
          </View>
          <Text className="text-[#00CCBB]">Change</Text>
        </View>
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
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
