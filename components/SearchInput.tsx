import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

interface SearchInputProps {
  value: string;
  handleChangeText: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  handleChangeText,
}) => {
  return (
    <View className="bg-white w-full h-14 px-4 text-black rounded-2xl items-center flex-row">
      <TextInput
        className="flex-1 text-black text-base"
        value={value}
        placeholder="Search for a drink..."
        placeholderTextColor={"#A0A3BD"}
        onChangeText={handleChangeText}
      />
      <TouchableOpacity>
        <Ionicons name="search" size={24} color="#A0A3BD" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
