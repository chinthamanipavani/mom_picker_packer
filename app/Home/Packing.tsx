import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PackingScreen = () => {
  const products = [
    {
      id: "SKU45678",
      name: "40ml",
      qty: 1,
      image: require("../../assets/images/syrup.png"), 
    },
    {
      id: "SKU45678",
      name: "40ml",
      qty: 1,
      image: require("../../assets/images/syrup.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#00a99d" onPress={() => router.back()} />
        <Text style={styles.title}>Packing</Text>
        <Text style={styles.pickerId}>Picker ID: 1096547839</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.orderInfo}>
          <View style={styles.infoRow}>
            <View>
              <Text style={styles.label}>Order ID</Text>
              <Text style={styles.value}>OID45678</Text>
            </View>
            <View>
              <Text style={styles.label}>Rack ID</Text>
              <Text style={styles.value}>PH3456</Text>
            </View>
          </View>
        </View>
        {products.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.details}>
              <Text style={styles.subLabel}>Product ID</Text>
              <Text style={styles.sku}>{item.id}</Text>

              <Text style={[styles.subLabel, { marginTop: 8 }]}>Product Name</Text>
              <Text style={styles.productName}>{item.name}</Text>

              <Text style={[styles.subLabel, { marginTop: 8 }]}>Quantity</Text>
              <Text style={styles.qty}>{item.qty}</Text>
            </View>
          </View>
        ))}
        <View style={styles.assignedBox}>
          <Text style={styles.assignedText}>Assigned to</Text>
          <View style={styles.assignRow}>
            <View>
              <Text style={styles.subLabel}>Delivery Rider Name</Text>
              <Text style={styles.value}>Full Name</Text>
            </View>
            <View>
              <Text style={styles.subLabel}>Rider ID</Text>
              <Text style={styles.value}>RID45678</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/Home/Outbound')}>
        <Text style={styles.buttonText}>Item Packed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PackingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FBF9",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#00a99d",
  },
  pickerId: {
    fontSize: 14,
    color: "#555",
  },
  orderInfo: {
    backgroundColor: "#E5F6F3",
    borderRadius: 10,
    padding: 16,
    marginVertical: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    color: "#555",
    fontSize: 14,
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 4,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    width: 60,
    height: 100,
    resizeMode: "contain",
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  subLabel: {
    color: "#555",
    fontSize: 14,
  },
  sku: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 2,
  },
  productName: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 2,
  },
  qty: {
    fontSize: 18,
    fontWeight: "700",
    color: "#00A693",
  },
  assignedBox: {
    marginVertical: 20,
  },
  assignedText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  assignRow: {
    backgroundColor: "#E5F6F3",
    borderRadius: 10,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#00A693",
    borderRadius: 40,
    paddingVertical: 18,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
});
