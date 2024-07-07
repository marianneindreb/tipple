import { View, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { ImageSourcePropType } from "react-native";

interface Category {
  id: string;
  title: string;
  icon: ImageSourcePropType;
}

interface CategoryListProps {
  categories: Category[];
  onSelect: (categoryId: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  onSelect,
}) => {
  const handleSelectCategory = (categoryTitle: string) => {
    onSelect(categoryTitle);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="flex-row">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            icon={category.icon}
            onSelect={() => handleSelectCategory(category.title)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default CategoryList;
