import { Stack } from "expo-router";

const AuthLayout: React.FC = () => {
  return (
    <Stack>
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="log-in" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
