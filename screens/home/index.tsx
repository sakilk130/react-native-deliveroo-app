import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView, TextInput, View } from "react-native";
import { AdjustmentsIcon, SearchIcon } from "react-native-heroicons/outline";
import Categories from "../../components/categories";
import FeaturedRow from "../../components/featured-row";
import Header from "../../components/header";
import SafeViewAndroid from "../../utils/SafeViewAndroid";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Header />
      <View className="flex-row pl-3 pr-3 items-center mb-3">
        <View className="flex-1 flex-row items-center bg-gray-300 p-2">
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
            className="flex-1 ml-2 text-sm"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        className="bg-gray-100"
      >
        <Categories />
        {Array.from({ length: 5 }).map((_, index) => (
          <FeaturedRow
            key={index}
            description="Testing 2"
            id={index}
            title="Testing 4"
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
