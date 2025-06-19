import { Button } from "@react-navigation/elements";
import { router } from "expo-router";
import { SafeAreaView, Text } from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      <Text>Welcome to the Navigation App!</Text>

      <Button
        onPress={() => {
          router.push("/profile");
        }}
      >
        Go to Profile
      </Button>
    </SafeAreaView>
  );
};

export default App;
