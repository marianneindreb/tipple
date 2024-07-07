import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import React, { useState } from "react";

interface CategoryCardProps {
  title: string;
  icon: ImageSourcePropType;
  onSelect: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  icon,
  onSelect,
}) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handlePress = () => {
    setSelected(!selected);
    onSelect();
  };

  return (
    <TouchableOpacity className="items-center mx-2" onPress={handlePress}>
      <View
        className={`border rounded-full p-3 items-center justify-center w-14 h-14 ${
          selected ? "bg-secondary border-white border-2 shadow-md" : ""
        }`}
      >
        <Image source={icon} className="w-7 h-7 tint-black" />
      </View>
      <Text className="mt-2 text-xs text-black">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
