import { Button, Text, View } from "react-native";

function More() {
  return Button
}

const Home = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Posts"
        onPress={() => {

          // Go to that page, but if the current page
          //  it won't work
          navigation.navigate("Posts");

          // For current page
          navigation.push("Home");
        }}
      />
    </View>
  );
};

export default Home;
