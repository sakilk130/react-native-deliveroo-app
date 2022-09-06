import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { getRestaurantsById } from "../../lib/restaurant";
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
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const data = await getRestaurantsById(id);
      setRestaurants(data);
    };
    fetchRestaurants();
  }, [id]);

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
        {restaurants?.map((restaurant: any) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
}
