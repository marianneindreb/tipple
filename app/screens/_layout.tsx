import React, { useState } from "react";
import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const ScreenLayout: React.FC = () => {
  const router = useRouter();
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  const toggleFavorite = () => {
    setIsFavorited((prev) => !prev);
  };

  return (
    <Stack>
      <Stack.Screen
        name="drink-details/[id]"
        options={{
          headerShown: true,
          // headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={22} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={toggleFavorite}>
              <Ionicons
                name={isFavorited ? "heart" : "heart-outline"}
                size={22}
                color="black"
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

export default ScreenLayout;
