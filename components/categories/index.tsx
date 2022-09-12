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
          imgUrl="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Testing 1"
        />
      ))}
    </ScrollView>
  );
}
