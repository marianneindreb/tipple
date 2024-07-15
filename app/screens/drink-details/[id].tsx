import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Drink } from "@/fetch/types";
import { fetchDrinkById } from "@/fetch/cocktailApiClient";

const DrinkDetailScreen: React.FC = () => {
  const { id } = useLocalSearchParams();
  const [drink, setDrink] = useState<Drink | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const drinkDetails = await fetchDrinkById(id as string);
      setDrink(drinkDetails);
    };
    fetchDetails();
  }, [id]);

  if (!drink) {
    return (
      <View className="flex-1 justify-center align-middle">
        <Text>Loading...</Text>
      </View>
    );
  }

  const ingredients: string[] = [];
  const measurements: string[] = [];

  for (let i = 1; i <= 15; i++) {
    const ingredientKey = `strIngredient${i}` as keyof Drink;
    const measureKey = `strMeasure${i}` as keyof Drink;

    if (drink[ingredientKey] && drink[measureKey]) {
      ingredients.push(drink[ingredientKey] as string);
      measurements.push(drink[measureKey] as string);
    } else {
      break;
    }
  }

  return (
    <ScrollView>
      <Image source={{ uri: drink.strDrinkThumb }} className="w-full h-80" />
      <View className="p-4">
        <Text className="text-base font-bold">Glass</Text>
        <Text className="pb-4">{drink.strGlass}</Text>

        <Text className="text-base font-bold">Ingredients</Text>
        <View className="pb-4">
          {ingredients.map((ingredient, index) => (
            <Text key={index} className="pb-2">
              - {measurements[index]} {ingredient}
            </Text>
          ))}
        </View>
        <Text className="text-base font-bold">Instructions</Text>
        <Text className="pb-4">{drink.strInstructions}</Text>
      </View>
    </ScrollView>
  );
};

export default DrinkDetailScreen;
