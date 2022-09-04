import React from "react";
import { ScrollView } from "react-native";
import CategoryCard from "../category-card";

export default function Categories() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: 10,
        paddingHorizontal: 15,
      }}
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <CategoryCard
          key={index}
          imgUrl="https://links.papareact.com/wru/"
          title="Testing 1"
        />
      ))}
    </ScrollView>
  );
}
