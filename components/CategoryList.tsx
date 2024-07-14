import { View, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import categories, { Category } from "@/constants/categories";

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
      {categories.map((category) => (
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

export default CategoryList;
