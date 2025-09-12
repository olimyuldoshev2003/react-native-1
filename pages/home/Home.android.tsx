import { Image, StyleSheet, Text, View } from "react-native";

const Home: any = () => {
  return (
    <View style={styles.mainBlock}>
      <Text style={styles.text}>Android</Text>

      {/* Image component */}
      <Image
        // For making the image blur
        blurRadius={2}

        // Transision duration
        fadeDuration={6000}

        // Works in internal images
        source={require("../../assets/images/favicon.png")}

        // Works in external images
        // source={{
        //   uri: `https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D`,
        // }}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainBlock: {
    display: "flex",
    justifyContent: `center`,
    alignItems: `center`,
    height: 1000,
  },
  text: {
    color: `white`,
    backgroundColor: `green`,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 30,
    borderRadius: 20,
  },

  // Img
  img: {
    width: 100,
    height: 50,
    borderRadius: 10 / 2,
    marginTop: 20,
    // Resize mode
    // resizeMode: "cover",
    // resizeMode: "contain",
    // resizeMode: "stretch",
    // resizeMode: "repeat",
    borderWidth: 1,
    borderColor: `green`,
  },
});

export default Home;
