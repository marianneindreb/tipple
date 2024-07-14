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
  fetchDrinksByQuery,
  fetchDrinksByCategory,
} from "../../networking/cocktailApi";
import type { Drink } from "@/networking/types";
import DrinkCard from "../../components/DrinkCard";
import categories, { Category } from "@/constants/categories";
import SearchInput from "@/components/SearchInput";

const HomeScreen: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0]
  );
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    searchDrink("");
  }, []);

  const searchDrink = async (query: string) => {
    setLoading(true);
    try {
      const fetchedDrinks = await fetchDrinksByQuery(query);
      setDrinks(fetchedDrinks);
    } catch (error) {
      console.error("Error fetching drinks:", error);
    } finally {
      setLoading(false);
      setSearchText("");
    }
  };

  const onCategorySelect = async (category: Category) => {
    setSelectedCategory(category);
    if (category.title !== "All drinks") {
      fetchDrinksByCategory(category.title).then((result) => {
        setDrinks(result);
      });
    } else {
      fetchDrinksByQuery("").then((result) => {
        setDrinks(result);
      });
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
              onSelect={onCategorySelect}
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
