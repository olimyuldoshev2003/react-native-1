import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native-expo-image-cache";

// AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

const Products = () => {
  const [products, setProducts] = useState<any>([]);
  const [connection, setConnection] = useState<boolean>(true);

  const renderItem = ({ item }: { item: any }) => {

    return (
      <View>
        {/* <Image
          source={{ uri: item.thumbnail }}
          style={{ width: `100%`, height: 200 }}
        /> */}

        {/* react-native-expo-image-cache */}
        <Image uri={item.thumbnail} style={{ width: `100%`, height: 200 }} />
        <View
          style={{
            flex: 1,
            flexDirection: `row`,
            justifyContent: `space-around`,
            marginTop: 10,
          }}
        >
          <Text>{item.title}</Text>
          <Text>{item.price}</Text>
        </View>
        <Text style={{ padding: 20 }}>{item.description}</Text>
      </View>
    );
  };

  async function getProducts() {
    try {
      if (connection) {
        const { data } = await axios.get(`https://dummyjson.com/products`);
        setProducts(data.products);
        await AsyncStorage.setItem("products", JSON.stringify(data.products));
      } else {
        const cacheProducts = await AsyncStorage.getItem("products");
        if (cacheProducts) {
          setProducts(JSON.parse(cacheProducts));
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      {connection ? (
        <FlatList data={products} renderItem={renderItem} />
      ) : (
        <Text>Disconnected</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`,
  },
});

export default Products;
