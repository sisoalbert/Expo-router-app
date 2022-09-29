import { View, Text } from "react-native";

export default function Details({ navigation }) {
  return (
    <View>
      <Text
        onPress={() => {
          // Go back to the previous screen using the imperative API.
          navigation.goBack();
        }}
      >
        Details Screen
      </Text>
    </View>
  );
}
