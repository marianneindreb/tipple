import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <Link href="/home">Go to Home</Link>
    </SafeAreaView>
  );
}
