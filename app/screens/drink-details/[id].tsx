import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Drink } from "@/fetch/types";
import { fetchDrinkById } from "@/fetch/cocktailApiClient";

const DrinkDetailScreen: React.FC = () => {
  const { id } = useLocalSearchParams();
  const [drink, setDrink] = useState<Drink | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchDetails = async () => {
      const drinkDetails = await fetchDrinkById(id as string);
      setDrink(drinkDetails);

      if (drinkDetails) {
        navigation.setOptions({ title: drinkDetails.strDrink });
      }
    };
    fetchDetails();
  }, [id, navigation]);

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

  const instructions = drink.strInstructions
    .split(".")
    .filter((sentence) => sentence.trim() !== "");

  const formattedInstructions = instructions.map((instruction, index) => (
    <Text key={index} className="mb-2 text-base">
      <Text className="font-bold text-base">{index + 1}. </Text>
      {instruction.trim()}.
    </Text>
  ));

  return (
    <ScrollView className="bg-white">
      <Image source={{ uri: drink.strDrinkThumb }} className="w-full h-96" />
      <View className="p-6">
        <Text className="text-lg font-bold">Glass</Text>
        <Text className="pb-4 text-base">{drink.strGlass}</Text>
        {ingredients.length > 0 && (
          <>
            <Text className="text-lg font-bold">Ingredients</Text>
            <View className="pb-4">
              {ingredients.map((ingredient, index) => (
                <Text key={index} className="text-base">
                  <Text className="font-bold text-xl">{`\u2022`} </Text>
                  {measurements[index]} {ingredient}
                </Text>
              ))}
            </View>
          </>
        )}

        <Text className="text-lg font-bold">Instructions</Text>
        <View>{formattedInstructions}</View>
      </View>
    </ScrollView>
  );
};

export default DrinkDetailScreen;
