import { Button, Text, View } from "react-native";

// function More(
//   // In here we can use this navigation, when
//   // we send it to the component as props
//   { navigation }: { navigation: any }
// ) {
//   // But if we didn't use as props,
//   // we can use the hook useNavigation()

//   // const navigation: any = useNavigation();
//   return (
//     <View style={{ marginTop: 10 }}>
//       <Button
//         title="Comments"
//         onPress={() => {
//           navigation.navigate("Comments");
//         }}
//       />
//       ;
//     </View>
//   );
// }

const Home = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <View style={{ marginTop: 10 }}>
        <Button
          title="Go to Posts"
          onPress={() => {
            // Go to that page, but if the current page
            //  it won't work
            navigation.navigate(
              "Posts",
              // We use it as sending id to the page, as useParams()
              // in React
              // { id: 111 }
            );

            // For current page
            // navigation.push("Home");
          }}
        />
      </View>
      {/* <More navigation={navigation} /> */}
    </View>
  );
};

export default Home;
