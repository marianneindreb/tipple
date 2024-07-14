import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { images } from "../../constants/images";
import React from "react";
import FormField from "@/components/FormField";
import { router } from "expo-router";

const Login: React.FC = () => {
  return (
    <ImageBackground
      source={images.welcomeBackground}
      resizeMode="cover"
      className="flex-1 justify-center"
    >
      <View className="bg-background h-full mt-96 p-8 rounded-t-3xl shadow-2xl">
        <Text className="font-bold text-2xl">Log in</Text>
        <FormField
          label={"Email"}
          placeholder={"Add your email address"}
          value={""}
          handleChangeText={function (text: string): void {
            throw new Error("Function not implemented.");
          }}
        />
        <FormField
          label={"Password"}
          placeholder={"Add your password"}
          value={""}
          handleChangeText={function (text: string): void {
            throw new Error("Function not implemented.");
          }}
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <Text className="text-black text-right pb-4 underline text-sm">
            Forgot password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-black p-2 rounded-md mt-4"
          onPress={() => router.push("/home")}
        >
          <Text className="text-center font-bold text-white text-base">
            LOG IN
          </Text>
        </TouchableOpacity>
        <View className="items-center mt-4">
          <View className="flex-row items-center">
            <Text className="text-black">Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.push("/sign-up")}>
              <Text className="text-black font-bold text-base">SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
