import React, { useState, useEffect } from "react";
import { Text, View, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/SearchInput";
import CategoryList from "../../components/CategoryList";
import { fetchSearchedDrinks } from "../../networking/cocktailApi";
import { Drink } from "../../models/Drink";
import DrinkCard from "../../components/DrinkCard";
import categories from "@/constants/categories";

const HomeScreen: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Drinks");
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchInitialDrinks = async () => {
      setLoading(true);
      try {
        const initialDrinks = await fetchSearchedDrinks("");
        setDrinks(initialDrinks);
      } catch (error) {
        console.error("Error fetching drinks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialDrinks();
  }, []);

  const searchDrink = async () => {
    setLoading(true);
    try {
      const searchedDrinks = await fetchSearchedDrinks(searchText);
      setDrinks(searchedDrinks);
      console.log(searchText);
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
            <SearchInput
              value={searchText}
              onSearchPress={searchDrink}
              setSearchText={setSearchText}
            />
            <CategoryList
              categories={categories}
              onSelect={setSelectedCategory}
            />
            <Text className="text-base font-bold">{selectedCategory}</Text>
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
