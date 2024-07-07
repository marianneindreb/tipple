import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import CategoryList from "../../components/CategoryList";
import categories from "../../constants/categories";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <CategoryList categories={categories} />
    </SafeAreaView>
  );
};

export default HomeScreen;
