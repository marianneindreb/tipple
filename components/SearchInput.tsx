import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

interface SearchInputProps {
  value: string;
  onSearchPress: () => void;
  setSearchText: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onSearchPress,
  setSearchText,
}) => {
  const inputRef = useRef<string>(value);

  const handleBlur = () => {
    setSearchText(inputRef.current);
  };

  return (
    <View className="bg-white w-full h-14 px-4 text-black rounded-2xl items-center flex-row">
      <TextInput
        className="flex-1 text-black text-base"
        defaultValue={value}
        placeholder="Search for a drink..."
        placeholderTextColor={"#A0A3BD"}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => (inputRef.current = text)}
        onBlur={handleBlur}
      />
      <TouchableOpacity onPress={onSearchPress}>
        <Ionicons name="search" size={24} color="#A0A3BD" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
