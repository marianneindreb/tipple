import { Stack } from "expo-router";

const ScreenLayout: React.FC = () => {
  return (
    <Stack>
      <Stack.Screen
        name="drink-details"
        options={{ headerShown: false, title: "test" }}
      />
    </Stack>
  );
};

export default ScreenLayout;
