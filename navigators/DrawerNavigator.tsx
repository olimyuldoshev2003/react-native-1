import Comments from "@/screens/Comments";
import Home from "@/screens/Home";
import Posts from "@/screens/Posts";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native";

// Icons

function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
      <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Posts" component={Posts} />
      <Drawer.Screen name="Comments" component={Comments} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
