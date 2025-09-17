import { Text, View } from "react-native";

const Posts = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Posts</Text>

      {/* It works like useParams() */}
      {/* <Text>Id {route.params.id}</Text> */}
    </View>
  );
};

export default Posts;
