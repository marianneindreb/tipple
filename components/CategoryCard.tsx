import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import React from "react";

interface CategoryCardProps {
  title: string;
  icon: ImageSourcePropType;
  onSelect: () => void;
  selected: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  icon,
  onSelect,
  selected,
}) => {
  return (
    <TouchableOpacity className="items-center mx-2" onPress={onSelect}>
      <View
        className={`border rounded-full p-3 items-center justify-center w-16 h-16 ${
          selected ? "bg-secondary border-white border-2 shadow-md" : ""
        }`}
      >
        <Image source={icon} className="w-8 h-8 tint-black" />
      </View>
      <Text className="mt-2 text-sm text-black">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
