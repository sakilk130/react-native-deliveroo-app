import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { LocationMarkerIcon, StarIcon } from "react-native-heroicons/outline";

interface IRestaurantCardProps {
  id: any;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: string[];
  long: string;
  lat: string;
}

export default function RestaurantCard(props: IRestaurantCardProps) {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
        source={{
          uri: props.imgUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="p-3">
        <Text className="font-bold text-lg">{props.title}</Text>
        <View className="flex-row items-center gap-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">{props.rating}</Text>
          <Text className="text-xs text-gray-500">•</Text>
          <Text className="text-xs text-gray-500">{props.genre}</Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">
            Nearby · {props.address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
