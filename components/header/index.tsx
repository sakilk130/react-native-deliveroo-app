import { View, Text, Image } from "react-native";
import React from "react";
import { UserIcon, ChevronDownIcon } from "react-native-heroicons/outline";

export default function Header() {
  return (
    <View className="flex-row p-3 items-center space-x-2">
      <Image
        source={{ uri: "https://links.papareact.com/wru" }}
        className="h-7 w-7 bg-gray-300 rounded-full"
      />
      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
        <Text className="font-bold text-xl">
          Current Location
          <ChevronDownIcon size={20} color="#00CCBB" />
        </Text>
      </View>
      <UserIcon size={25} color="#00CCBB" />
    </View>
  );
}
