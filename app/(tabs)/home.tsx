import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import CategoryList from "../../components/CategoryList";
import {
  fetchSearchedDrinks,
  fetchDrinksByCategory,
} from "../../networking/cocktailApi";
import { Drink } from "../../models/Drink";
import DrinkCard from "../../components/DrinkCard";
import categories, { Category, CategoryTitle } from "@/constants/categories";
import SearchInput from "@/components/SearchInput";

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
    if (!searchText) {
      searchDrink("", selectedCategory.title);
    }
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
      setSearchText("");
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
          <View className="px-4 space-y-6">
            <View className="justify-between items-start flex-row">
              <View>
                <Text className="text-2xl pt-8 font-bold">
                  What's your tipple?
                </Text>
              </View>
            </View>

            <SearchInput
              value={searchText}
              handleChangeText={setSearchText}
              onSearch={() => searchDrink(searchText)}
            />

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
