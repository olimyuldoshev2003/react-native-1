// import Home from "@/pages/home/Home";

// react navigation
import StackNavigator from "@/navigators/StackNavigator";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { View } from "react-native";

const App = () => {
  return (
    // <View>
    //   //   <Home />
    // </View>
    
    <NavigationIndependentTree>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
};

export default App;
