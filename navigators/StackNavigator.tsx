import Comments from "@/screens/Comments";
import Home from "@/screens/Home";
import Posts from "@/screens/Posts";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function StackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Posts" component={Posts} />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
