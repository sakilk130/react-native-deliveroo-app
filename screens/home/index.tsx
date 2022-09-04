import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView, TextInput, View } from "react-native";
import { AdjustmentsIcon, SearchIcon } from "react-native-heroicons/outline";
import Categories from "../../components/categories";
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
      <View className="flex-row pl-3 pr-3 items-center">
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

      <ScrollView>
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
}
