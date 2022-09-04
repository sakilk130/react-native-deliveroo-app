import { View, Text } from "react-native";
import React from "react";

interface IFeaturedRowProps {
  title: string;
  description: string;
  featuredCategory: string;
}

export default function FeaturedRow({
  title,
  description,
  featuredCategory,
}: IFeaturedRowProps) {
  return (
    <View>
      <Text>index</Text>
    </View>
  );
}
