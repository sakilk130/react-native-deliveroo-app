import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { LocationMarkerIcon, StarIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../../sanity.config';

export interface IRestaurantCardProps {
  id: any;
  imgUrl: any;
  title: string;
  rating: number;
  genre: any;
  address: string;
  short_description: string;
  dishes: object[];
  long: any;
  lat: any;
}

export default function RestaurantCard(props: IRestaurantCardProps) {
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Restaurant', {
          ...props,
        })
      }
    >
      <View className="bg-white mr-3 shadow">
        <Image
          source={{ uri: urlFor(props.imgUrl).url() }}
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
      </View>
    </TouchableOpacity>
  );
}
