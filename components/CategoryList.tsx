import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import { ImageSourcePropType } from "react-native";

interface Category {
  id: string;
  title: string;
  icon: ImageSourcePropType;
}

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<{ categories: Category[] }> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="flex-row">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            icon={category.icon}
            selected={category.id === selectedCategory}
            onSelect={() => handleSelectCategory(category.id)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default CategoryList;
