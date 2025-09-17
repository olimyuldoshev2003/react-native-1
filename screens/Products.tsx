import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const Products = () => {
  const [products, setProducts] = useState<any>([]);
  const [connection, setConnection] = useState<boolean>(true);

  const renderItem = ({ item }: { item: any }) => {
    return (
      <View>
        <Image
          source={{ uri: item.thumbnail }}
          style={{ width: `100%`, height: 200 }}
        />
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
      const { data } = await axios.get(`https://dummyjson.com/products`);
      setProducts(data.products);
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
