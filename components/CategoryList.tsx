import { View, ScrollView } from "react-native";
import React from "react";
import { CATEGORIES, Category } from "@/constants/categories";
import { CategoryCard } from "./CategoryCard";

interface CategoryListProps {
  onSelect: (category: Category) => Promise<void>;
  selectedCategoryId: string;
}

const CategoryList: React.FC<CategoryListProps> = ({
  onSelect,
  selectedCategoryId,
}) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View className="flex-row pt-4">
      {CATEGORIES.map((category) => (
        <CategoryCard
          category={category}
          key={category.id}
          isSelected={category.id === selectedCategoryId}
          onSelect={() => onSelect(category)}
        />
      ))}
    </View>
  </ScrollView>
);

export { CategoryList };
