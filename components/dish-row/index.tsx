import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectCartItems,
} from '../../app/features/cartSlice';
import { IDish } from '../../interfaces';
import { urlFor } from '../../sanity.config';

interface IDishRowProps {
  dish: IDish;
}
export default function DishRow({ dish }: IDishRowProps) {
  const dispatch: any = useDispatch();

  const [isPressed, setIsPressed] = useState(false);

  const items = useSelector(selectCartItems);

  const handleAddToCart = () => {
    dispatch(addToCart(dish));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(dish));
  };

  return (
    <>
      <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
        <View
          className={`bg-white p-4 border border-gray-400 ${
            isPressed && 'border-b-0'
          }`}
        >
          <View className="flex-row">
            <View className="flex-1">
              <Text className="text-lg">{dish.name}</Text>
              <Text className="text-slate-400">{dish.short_description}</Text>
              <Text className="mt-1 text-slate-400">${dish.price}</Text>
            </View>
            <Image
              source={{ uri: urlFor(dish.image).url() }}
              className="h-20 w-20"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="flex-row items-center gap-2 bg-white px-4 py-2 ">
          <TouchableOpacity onPress={handleRemoveFromCart}>
            <MinusCircleIcon color="#00CCBB" size={40} />
          </TouchableOpacity>
          <Text>{items.length}</Text>
          <TouchableOpacity onPress={handleAddToCart}>
            <PlusCircleIcon color="#00CCBB" size={40} />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
