import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

const inventoryData = [
  {
    id: "PID12561",
    category: "Category Name",
    name: "Paracetamol | 500mg",
    min: 10,
    refill: 25,
    max: 50,
    image: require("@/assets/images/tablet.jpg"),
  },
  {
    id: "PID12561",
    category: "Category Name",
    name: "Paracetamol | 500mg",
    min: 10,
    refill: 25,
    max: 50,
    image: require("@/assets/images/tablet.jpg"),
  },
  {
    id: "PID12561",
    category: "Category Name",
    name: "Paracetamol | 500mg",
    min: 10,
    refill: 25,
    max: 50,
    image: require("@/assets/images/tablet.jpg"),
  },
  {
    id: "PID12561",
    category: "Category Name",
    name: "Paracetamol | 500mg",
    min: 10,
    refill: 25,
    max: 50,
    image: require("@/assets/images/tablet.jpg"),
  },
  {
    id: "PID12561",
    category: "Category Name",
    name: "Paracetamol | 500mg",
    min: 10,
    refill: 25,
    max: 50,
    image: require("@/assets/images/tablet.jpg"),
  },
  {
    id: "PID12561",
    category: "Category Name",
    name: "Paracetamol | 500mg",
    min: 10,
    refill: 25,
    max: 50,
    image: require("@/assets/images/tablet.jpg"),
  },
  {
    id: "PID12561",
    category: "Category Name",
    name: "Paracetamol | 500mg",
    min: 10,
    refill: 25,
    max: 50,
    image: require("@/assets/images/tablet.jpg"),
  },
];

const InventoryScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>
          Product ID: <Text style={styles.bold}>{item.id}</Text>
        </Text>
        <Text style={styles.text}>
          Category: <Text style={styles.bold}>{item.category}</Text>
        </Text>
        <Text style={styles.text}>
          Product Name: <Text style={styles.bold}>{item.name}</Text>
        </Text>
        <View style={styles.row}>
          <Text style={styles.text}>
            Min: <Text style={styles.bold}>{item.min}</Text>
          </Text>
          <Text style={styles.text}>
            Max: <Text style={styles.bold}>{item.max}</Text>
          </Text>
          <Text style={styles.text}>
            Refill At: <Text style={styles.bold}>{item.refill}</Text>
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#00A79D" />
        <Text style={styles.headerTitle}>Inventory</Text>
      </View>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={22} color="#00A79D" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Here"
          placeholderTextColor="#999"
        />
        <Ionicons name="mic-outline" size={22} color="#00A79D" />
      </View>
      <FlatList
        data={inventoryData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F8F6",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#00A79D",
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#00A79D",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 15,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#00A79D",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  text: {
    fontSize: 15,
    color: "#444",
    marginBottom: 3,
  },
  bold: {
    fontWeight: "600",
    color: "#000",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default InventoryScreen;
