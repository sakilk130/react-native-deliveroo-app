import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "../restaurant-card";

interface IFeaturedRowProps {
  id: any;
  title: string;
  description: string;
}

export default function FeaturedRow({
  id,
  title,
  description,
}: IFeaturedRowProps) {
  return (
    <View className="p-3">
      <View className="flex-row justify-between pb-3">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-xs text-gray-500">{description}</Text>
        </View>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <RestaurantCard
          address="Testing 1"
          dishes={["Testing 2"]}
          genre="Testing 3"
          id={id}
          imgUrl="https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          lat="Testing 5"
          long="Testing 6"
          rating={5}
          short_description="Testing 7"
          title="Testing 8"
        />
        <RestaurantCard
          address="Testing 1"
          dishes={["Testing 2"]}
          genre="Testing 3"
          id={id}
          imgUrl="https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          lat="Testing 5"
          long="Testing 6"
          rating={5}
          short_description="Testing 7"
          title="Testing 8"
        />
      </ScrollView>
    </View>
  );
}
