import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { images } from "../../constants/images";
import React from "react";
import FormField from "@/components/FormField";
import { router } from "expo-router";

const Signup = () => {
  return (
    <ImageBackground
      source={images.welcomeBackground}
      resizeMode="cover"
      className="flex-1 justify-center"
    >
      <View className="bg-background h-full mt-96 p-8 rounded-t-3xl shadow-2xl">
        <Text className="font-bold text-2xl">Sign up</Text>
        <FormField
          label={"Username"}
          placeholder={"Add your username"}
          value={""}
          handleChangeText={function (text: string): void {
            throw new Error("Function not implemented.");
          }}
        />
        <FormField
          label={"Email"}
          placeholder={"Add valid email address"}
          value={""}
          handleChangeText={function (text: string): void {
            throw new Error("Function not implemented.");
          }}
        />
        <FormField
          label={"Password"}
          placeholder={"Add a secure password"}
          value={""}
          handleChangeText={function (text: string): void {
            throw new Error("Function not implemented.");
          }}
          secureTextEntry={true}
        />
        <TouchableOpacity
          className="bg-black p-2 rounded-md mt-4"
          onPress={() => router.push("/home")}
        >
          <Text className="text-center font-bold text-white text-base">
            SIGN UP
          </Text>
        </TouchableOpacity>
        <View className="items-center mt-4">
          <View className="flex-row items-center">
            <Text className="text-black">Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push("/log-in")}>
              <Text className="text-black font-bold text-base">LOG IN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Signup;
