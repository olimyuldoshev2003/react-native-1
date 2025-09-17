import Comments from "@/screens/Comments";
import Home from "@/screens/Home";
import Posts from "@/screens/Posts";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Icons
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Products from "@/screens/Products";
import AntDesign from "@expo/vector-icons/AntDesign";


function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: `red`,
        tabBarInactiveTintColor: `balck`,

        // For showing and hiding the text of tab
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon(props) {
            return <Entypo name="home" size={24} color={props.color} />;
          },
        }}
      />
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{
          tabBarIcon(props) {
            return <EvilIcons name="search" size={24} color={props.color} />;
          },
        }}
      />
      <Tab.Screen
        name="Comments"
        component={Comments}
        options={{
          tabBarIcon(props) {
            return (
              <FontAwesome name="comments-o" size={24} color={props.color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon(props) {
            return <AntDesign name="product" size={24} color={props.color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
