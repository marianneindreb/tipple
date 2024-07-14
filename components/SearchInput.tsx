import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface SearchInputProps {
  value: string;
  handleChangeText: (text: string) => void;
  onSearch: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  handleChangeText,
  onSearch,
}) => {
  return (
    <View className="mb-2 mt-4">
      <View className="flex-row items-center bg-white p-4 rounded-xl">
        <TextInput
          placeholder="Search for a drink"
          value={value}
          onChangeText={handleChangeText}
          placeholderTextColor="#A0A3BD"
          autoCapitalize="none"
          autoCorrect={false}
          className="flex-1"
        />
        <TouchableOpacity onPress={onSearch}>
          <Ionicons name="search" size={24} color="#A0A3BD" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;
