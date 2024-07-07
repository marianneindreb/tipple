import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

interface TabIconProps {
  name: string;
  color: string;
  iconName: keyof typeof Ionicons.glyphMap;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({
  iconName,
  color,
  name,
  focused,
}) => {
  return (
    <View className="items-center">
      <Ionicons name={iconName} size={24} color={color} />
      <Text
        className={`text-xs pt-1 ${focused ? "font-bold" : ""}`}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout: React.FC = () => {
  const focusedColor = "#E3A976";
  const defaultColor = "#2E3141";

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#EFEFEF",
          borderTopWidth: 1,
          borderTopColor: "transparent",
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              iconName="home"
              color={focused ? focusedColor : defaultColor}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              iconName="bookmark"
              color={focused ? focusedColor : defaultColor}
              name="Saved"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="inventory"
        options={{
          title: "My Bar",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              iconName="albums"
              color={focused ? focusedColor : defaultColor}
              name="My Bar"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
