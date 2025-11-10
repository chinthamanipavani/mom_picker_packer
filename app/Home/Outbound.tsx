import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const InboundScreen = () => {

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#00a99d" onPress={() => router.back()}/>
        <Text style={styles.headerTitle}>Outbound</Text>
      </View>
      <TouchableOpacity
        style={styles.optionCard}
        onPress={() => router.push('/Home/Pack')}
      >
        <View style={styles.optionLeft}>
          <Ionicons name="document-text-outline" size={20} color="#00AFA3" />
          <Text style={styles.optionText}>Picking</Text>
        </View>
        <Ionicons name="arrow-forward-outline" size={20} color="#00AFA3" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default InboundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    margin:10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#00a99d",
    marginLeft: 10,
  },
  optionCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E9F7F6",
    borderWidth: 1,
    borderColor: "#00AFA3",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginLeft: 10,
  },
});
