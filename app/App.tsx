// import Home from "@/pages/home/Home";

// react navigation
import DrawerNavigator from "@/navigators/DrawerNavigator";
import StackNavigator from "@/navigators/StackNavigator";
import TabNavigator from "@/navigators/TabNavigator";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { View } from "react-native";

const App = () => {
  return (
    // <View>
    //   <Home />
    // </View>
    
     <NavigationIndependentTree>
       <NavigationContainer>
         {/* <StackNavigator />  */}
         <TabNavigator/>
         {/* <DrawerNavigator/> */}
      </NavigationContainer>
    </NavigationIndependentTree> 
  );
};

export default App;
