import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Drink } from "../models/Drink";

interface DrinkCardProps {
  drink: Drink;
}

const DrinkCard: React.FC<DrinkCardProps> = ({ drink }) => {
  return (
    <TouchableOpacity className="bg-white w-44 h-60 rounded-lg m-2 shadow-md p-2">
      <Image
        source={{ uri: drink.strDrinkThumb }}
        className="w-40 h-44 rounded-lg"
      />
      <View className="mt-2">
        <Text className="text-sm font-bold">{drink.strDrink}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DrinkCard;
