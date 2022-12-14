import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from 'react-native-heroicons/solid';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../../app/features/restaurantSlice';
import Cart from '../../components/cart';
import DishRow from '../../components/dish-row';
import { IDish } from '../../interfaces';
import { urlFor } from '../../sanity.config';

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  }: any = useRoute();
  const navigation: any = useNavigation();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        lat,
        long,
      })
    );
  }, [dispatch]);

  return (
    <>
      <Cart />
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: 'absolute',
            }}
          >
            <View className=" top-14 left-5 p-2 bg-gray-100 rounded-full">
              <ArrowLeftIcon size={20} color="#00CCBB" />
            </View>
          </TouchableOpacity>
        </View>
        <View className="bg-white p-4">
          <Text className="font-bold text-2xl">{title}</Text>
          <View className="flex-row gap-1 mt-1">
            <StarIcon size={20} color="#00CCBB" />
            <Text>{rating}</Text>
            <LocationMarkerIcon size={20} color="#00CCBB" />
            <Text>Nearby ?? {address}</Text>
          </View>
          <Text className="mt-2 mb-2">{short_description}</Text>
        </View>
        <TouchableOpacity>
          <View className="bg-white flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </View>
        </TouchableOpacity>
        <View className="pb-36">
          <Text className="text-lg font-bold p-4">Menu</Text>
          {dishes.map((dish: IDish) => (
            <DishRow key={dish._id} dish={dish} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
