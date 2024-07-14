import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface FormFieldProps {
  label: string;
  placeholder: string;
  value: string;
  handleChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  placeholder,
  value,
  handleChangeText,
  secureTextEntry = false,
}) => {
  const [isSecureEntry, setIsSecureEntry] = useState(secureTextEntry);

  return (
    <View className="mb-4 mt-4">
      <Text className="text-base">{label}</Text>
      <View className="flex-row items-center bg-white p-4 rounded-md mt-2">
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={handleChangeText}
          secureTextEntry={isSecureEntry}
          className="flex-1"
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsSecureEntry((prevState) => !prevState)}
          >
            <Ionicons
              name={isSecureEntry ? "eye-off" : "eye"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export { FormField };
