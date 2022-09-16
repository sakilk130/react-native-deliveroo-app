import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';

const CartScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
      }}
    >
      <View className="pb-4 flex-row items-center shadow-md border-b-2 border-[#00CCBB]">
        <View className="pl-4 flex-1">
          <Text className="text-center text-lg font-extrabold">Cart</Text>
          <Text className="text-center text-slate-400">Nacho's</Text>
        </View>

        <TouchableOpacity onPress={navigation.goBack}>
          <View className="pr-4 rounded-full">
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </View>
        </TouchableOpacity>
      </View>

      <View className="bg-gray-200 h-full">
        <View className="mt-4 flex-row justify-between items-center bg-white p-4">
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

        <View className="mt-4 flex-row justify-between items-center bg-white p-4">
          <View className="flex-row gap-3 items-center">
            <Text>4x</Text>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1662368298353-9bbb868acdd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
              }}
              className="h-8 w-8 rounded-full"
            />
            <Text>Nachos</Text>
          </View>
          <View className="flex-row gap-3">
            <Text className="text-slate-400">$90</Text>
            <Text className="text-[#00CCBB]">Remove</Text>
          </View>
        </View>
        <View className="border-t border-zinc-400 flex-row justify-between items-center bg-white p-4">
          <View className="flex-row gap-3 items-center">
            <Text>4x</Text>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1662368298353-9bbb868acdd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
              }}
              className="h-8 w-8 rounded-full"
            />
            <Text>Nachos</Text>
          </View>
          <View className="flex-row gap-3">
            <Text className="text-slate-400">$90</Text>
            <Text className="text-[#00CCBB]">Remove</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
