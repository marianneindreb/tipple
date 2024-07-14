import { Redirect, router } from "expo-router";
import { images } from "../constants/images";
import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <View className="flex-1 ">
      <ImageBackground
        source={images.welcomeBackground}
        resizeMode="cover"
        className="flex-1 justify-center"
      >
        <View className="p-8 relative z-10 space-y-4">
          <Text className="text-4xl font-bold text-white">tipple.</Text>
          <Text className="text-2xl text-white">
            Discover, create, and savor the perfect drink with tipple.
          </Text>
          <TouchableOpacity
            className="align-middle bg-white p-2 rounded-md mt-4"
            onPress={() => router.push("/(auth)/sign-up")}
          >
            <Text className="text-center font-bold text-base">SIGN UP</Text>
          </TouchableOpacity>
          <Text className="text-white text-center mt-4">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("/home")}>
            <Text className="text-center text-white font-bold text-base">
              LOG IN
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
