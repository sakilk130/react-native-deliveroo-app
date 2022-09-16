import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { SafeAreaView, ScrollView, TextInput, View } from 'react-native';
import { AdjustmentsIcon, SearchIcon } from 'react-native-heroicons/outline';
import Categories from '../../components/categories';
import FeaturedRow from '../../components/featured-row';
import Header from '../../components/header';
import { IFeaturedCategory } from '../../interfaces';
import { getFeaturedCategories } from '../../lib/featuredCategory';
import SafeViewAndroid from '../../utils/SafeViewAndroid';

export default function HomeScreen() {
  const navigation = useNavigation();

  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    const fetchFeaturedCategories = async () => {
      const data = await getFeaturedCategories();
      setFeaturedCategories(data);
    };
    fetchFeaturedCategories();
  }, []);

  return (
    <SafeAreaView style={SafeViewAndroid().AndroidSafeArea}>
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
        {featuredCategories?.length > 0 &&
          featuredCategories?.map((category: IFeaturedCategory) => (
            <FeaturedRow
              key={category._id}
              description={category.short_description}
              id={category._id}
              title={category.name}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}
