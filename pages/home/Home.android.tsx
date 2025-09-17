import { useDeviceOrientation } from "@react-native-community/hooks";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";

// Image Picker
import useLocation from "@/hooks/useLocation";
import * as ImagePicker from "expo-image-picker";

// NetInfo
import { useNetInfo } from "@react-native-community/netinfo";

// Permissions
// import * as Permissions from "expo-permissions";

const Home = () => {
  const orientation = useDeviceOrientation();
  const location = useLocation();
  const netInfo = useNetInfo();

  const [imgFromGallery, setImgFromGallery] = useState<any>("");

  async function requestPermission() {
    // const permission = await Permissions.askAsync(
    //   Permissions.MEDIA_LIBRARY,
    //   Permissions.LOCATION_FOREGROUND
    // );

    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted) {
      alert("You need to enable permission to access the library");
    }
  }

  async function selectImage() {
    try {
      const result: any = await ImagePicker.launchImageLibraryAsync();

      if (!result.cancelled) {
        setImgFromGallery(result.assets[0].uri);
      }
    } catch (error) {
      console.error(error);
    }
  }

  // NetInfo.fetch().then((state) => {
  //   console.log(state);
  // });

  // It's for Class component
  // const unsubscribe = NetInfo.addEventListener((state) => {
  //   console.log(state);
  // });

  useEffect(() => {
    requestPermission();
    // unsubscribe();
  }, []);

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
      {/* <Text style={styles.text}>Hello World!</Text> */}

      {/* Icons from the component <Ionicons /> , which is from expo*/}
      {/* <Ionicons name="checkmark-circle" size={32} color="green" /> */}

      {/* Expo Image Picker */}
      {/* <Button title="Select Image" onPress={selectImage} />
      <Image
        source={{ uri: imgFromGallery }}
        style={{ width: 300, height: 300, marginTop: 20 }}
      /> */}

      {/* Location */}
      {/* <Text>{JSON.stringify(location)}</Text> */}

      {/* NetInfo */}
      {/* <Text>Hello</Text> */}
      {/* {netInfo.type !== "unknown" && netInfo.isInternetReachable ? (
        <Text>Connected</Text>
      ) : (
        <Text>Disconnected</Text>
      )} */}

      <Text>Hello</Text>
      
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
