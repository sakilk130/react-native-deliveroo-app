import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { IDish } from '../../interfaces';
import { urlFor } from '../../sanity.config';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';

interface IDishRowProps {
  dish: IDish;
}
export default function DishRow({ dish }: IDishRowProps) {
  const [isPressed, setIsPressed] = useState(false);
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
          <TouchableOpacity>
            <MinusCircleIcon color="#00CCBB" size={40} />
          </TouchableOpacity>
          <Text>0</Text>
          <TouchableOpacity>
            <PlusCircleIcon color="#00CCBB" size={40} />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
