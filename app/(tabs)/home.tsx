import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import CategoryList from "../../components/CategoryList";
import categories from "../../constants/categories";
import SearchInput from "../../components/SearchInput";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");

  const searchDrink = () => {
    // Search for drinks based on the search text
  };
  return (
    <SafeAreaView>
      <Text>What's your tipple?</Text>
      <SearchInput value={""} handleChangeText={searchDrink} />
      <CategoryList categories={categories} />
    </SafeAreaView>
  );
};

export default HomeScreen;
