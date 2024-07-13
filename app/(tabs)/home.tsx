// HomeScreen.tsx
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryList from "../../components/CategoryList";
import {
  fetchSearchedDrinks,
  fetchDrinksByCategory,
} from "../../networking/cocktailApi";
import { Drink } from "../../models/Drink";
import DrinkCard from "../../components/DrinkCard";
import categories, { Category, CategoryTitle } from "@/constants/categories";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeScreen: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0]
  );
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    searchDrink("", selectedCategory.title);
  }, []);

  useEffect(() => {
    searchDrink(searchText, selectedCategory.title);
  }, [selectedCategory]);

  const searchDrink = async (
    query: string,
    category: CategoryTitle = selectedCategory.title
  ) => {
    setLoading(true);
    try {
      let fetchedDrinks;
      if (query) {
        fetchedDrinks = await fetchSearchedDrinks(query);
      } else if (category && category !== "All drinks") {
        fetchedDrinks = await fetchDrinksByCategory(category);
      } else {
        fetchedDrinks = await fetchSearchedDrinks("");
      }
      setDrinks(fetchedDrinks);
    } catch (error) {
      console.error("Error fetching drinks:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderDrinkItem = ({ item }: { item: Drink }) => (
    <View>
      <DrinkCard drink={item} />
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={drinks}
        renderItem={renderDrinkItem}
        keyExtractor={(item) => item.idDrink.toString()}
        numColumns={2}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="text-2xl font-bold">What's your tipple?</Text>
              </View>
            </View>
            <View className="bg-white w-full h-14 px-4 text-black rounded-2xl items-center flex-row">
              <TextInput
                className="flex-1 text-black text-base"
                value={searchText}
                placeholder="Search for a drink..."
                placeholderTextColor="#A0A3BD"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={setSearchText}
              />
              <TouchableOpacity onPress={() => searchDrink(searchText)}>
                <Ionicons name="search" size={24} color="#A0A3BD" />
              </TouchableOpacity>
            </View>
            <CategoryList
              onSelect={setSelectedCategory}
              selectedCategoryId={selectedCategory.id}
            />
            <Text className="text-base font-bold">
              {selectedCategory.title}
            </Text>
          </View>
        )}
        ListFooterComponent={() =>
          loading && <ActivityIndicator size="small" color="#000000" />
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
