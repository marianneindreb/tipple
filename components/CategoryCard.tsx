import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Category } from "@/constants/categories";

interface CategoryCardProps {
  category: Category;
  onSelect: () => Promise<void>;
  isSelected: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onSelect,
  isSelected,
}) => (
  <TouchableOpacity className="items-center mx-2" onPress={onSelect}>
    <View
      className={`border-white border-2 rounded-full items-center justify-center w-14 h-14 ${
        isSelected ? "bg-white border-white shadow-xs" : ""
      }`}
    >
      <Image source={category.icon} className="w-7 h-7" />
    </View>
    <Text className="mt-2 text-xs text-black">{category.title}</Text>
  </TouchableOpacity>
);

export { CategoryCard };
