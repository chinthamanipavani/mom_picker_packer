import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const UnloadingTasks = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#00a99d" onPress={() => router.back()}/>
        <Text style={styles.headerTitle}>Unloading Tasks</Text>
        <Text style={styles.headerCount}>Count: 1</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Truck ID</Text>
          <Text style={styles.value}>TID45678</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Consignment ID</Text>
          <Text style={styles.value}>1332456</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total Crates</Text>
          <Text style={styles.value}>280</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Arrival Date & Time</Text>
          <View>
            <Text style={styles.value}>Monday, 24 Oct 2025</Text>
            <Text style={styles.value}>08:40 AM</Text>
          </View>
        </View>

        <Text style={styles.storeName}>Complete Store Name</Text>

        <TouchableOpacity style={styles.button} onPress={()=>router.push('/Home/Start')}>
          <Text style={styles.buttonText} >Start Unloading</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UnloadingTasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9F7F6",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#00a99d",
  },
  headerCount: {
    fontSize: 16,
    color: "#555",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    margin: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#13B5A1",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  label: {
    fontSize: 16,
    color: "#444",
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  storeName: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
    marginTop: 10,
    color: "#444",
  },
  button: {
    backgroundColor: "#00AFA3",
    borderRadius: 30,
    marginTop: 20,
    alignItems: "center",
    paddingVertical: 14,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
