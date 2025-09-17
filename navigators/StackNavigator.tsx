import Comments from "@/screens/Comments";
import Home from "@/screens/Home";
import Posts from "@/screens/Posts";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function StackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      // But this options work in all of pages
      screenOptions={{
        title: "New posts",
        headerStyle: { backgroundColor: `tomato` },
        headerTintColor: "blue",
        headerTitleStyle: {
          fontWeight: `bold`,
        },
        headerTitleAlign: `center`,
        // headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Posts"
        component={Posts}
        // This options are only in the page posts
        options={{
          title: "New posts",
          headerStyle: { backgroundColor: `tomato` },
          headerTintColor: "red",
          headerTitleStyle: {
            fontWeight: `bold`,
          },
          headerTitleAlign: `center`,
          //   headerShown: false,
        }}
      />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
