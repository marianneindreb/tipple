import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryList from "../../components/CategoryList";
import SearchInput from "../../components/SearchInput";
import categories from "../../constants/categories";

const HomeScreen: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Drinks");

  const searchDrink = (text: string) => {
    // TODO: Implement search logic based on the search text
    setSearchText(text);
    // const filteredCategories = categories.filter(category =>
    //   category.title.toLowerCase().includes(text.toLowerCase())
    // );
  };

  const handleCategorySelect = (categoryTitle: string) => {
    setSelectedCategory(categoryTitle);
  };

  return (
    <SafeAreaView>
      <FlatList
        data={[{ id: "1" }, { id: "2" }, { id: "3" }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text className="text-3xl">{item.id}</Text>}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <Text className="text-2xl font-bold">What's your tipple?</Text>
            </View>
            <SearchInput value={searchText} handleChangeText={searchDrink} />
            <View className="flex-1">
              <CategoryList
                categories={categories}
                onSelect={handleCategorySelect}
              />
            </View>
            <Text className="text-base font-bold">{selectedCategory}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
