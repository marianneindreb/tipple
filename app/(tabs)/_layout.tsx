import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="saved" />
      <Tabs.Screen name="inventory" />
    </Tabs>
  );
};

export default TabLayout;
