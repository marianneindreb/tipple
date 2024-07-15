import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import type { Drink } from "@/fetch/types";

interface DrinkCardProps {
  drink: Drink;
}

const DrinkCard: React.FC<DrinkCardProps> = ({ drink }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      className="bg-white w-44 h-54 rounded-lg m-2 shadow-xs p-2"
      onPress={() => router.push(`/screens/drink-details/${drink.idDrink}`)}
    >
      <Image
        source={{ uri: drink.strDrinkThumb }}
        className="w-40 h-44 rounded-lg"
      />
      <View className="my-2 flex-row justify-between items-center">
        <Text className="text-sm flex-1" numberOfLines={1}>
          {drink.strDrink}
        </Text>
        <Ionicons name="chevron-forward" size={16} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export { DrinkCard };
