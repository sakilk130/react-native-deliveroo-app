import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

interface ICategoryCardProps {
  imgUrl: string;
  title: string;
}

export default function CategoryCard({ imgUrl, title }: ICategoryCardProps) {
  return (
    <TouchableOpacity
      style={{
        position: "relative",
        marginRight: 10,
      }}
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
