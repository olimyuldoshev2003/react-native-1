import Ionicons from "@expo/vector-icons/Ionicons";
import { useDeviceOrientation } from "@react-native-community/hooks";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";

const Home = () => {
  const orientation = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />

      {/* Data about with and height of device */}
      {/* <Button title="Show" onPress={() => {
       alert(JSON.stringify(Dimensions.get("screen"))) 
      }}/> */}

      {/* Orientation (portrait or landscape) styling functionality */}
      {/* <View
        style={{
          width: `100%`,
          height: orientation === "portrait" ? `30%` : `100%`,
          backgroundColor: `black`,
        }}
      ></View> */}

      {/* FlexBox */}

      {/* Position */}

      {/* Fonts */}
      <Text style={styles.text}>Hello World!</Text>

      {/* Icons from the component <Ionicons /> , which is from expo */}
      <Ionicons name="add-circle-sharp" size={32} color="green" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: `flex`,
    justifyContent: "center",
    alignItems: `center`,
    height: `100%`,
  },

  text: {
    fontSize: 35,
    // fontWeight: `bold`,

    // Android
    fontFamily: `Avenir`,

    // IOS
    // fontFamily: `Roboto`,

    // text-decoration In React native
    // textDecorationLine: `underline line-through`,
    // textDecorationLine: `underline`,
    // textDecorationLine: `line-through`,
  },
});

export default Home;
