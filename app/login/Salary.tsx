import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function OnboardingSuccess() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconCircle}>
          <Ionicons name="checkmark-done" size={48} color="#fff" />
        </View>

        <Text style={styles.title}>Onboarding</Text>
        <Text style={styles.title}>Successful</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Work Details</Text>

          <View style={styles.divider} />

          <Text style={styles.jobType}>Full Time</Text>
          <Text style={styles.shift}>Fixed shift (8 hours daily & 1 week off)</Text>

          <View style={styles.incomeBox}>
            <Text style={styles.salary}>Rs 15000</Text>
            <Text style={styles.subText}>Estimated monthly income</Text>
          </View>

          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={18} color="#00A79D" />
            <Text style={styles.locationText}>
              Nearest store distance is <Text style={styles.bold}>800 m</Text>
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/BottomNavBar/home')}>
        <Text style={styles.buttonText}>Proceed to home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40,
  },
  content: {
    alignItems: "center",
    marginTop:150
  },
  iconCircle: {
    backgroundColor: "#00a99d",
    borderRadius: 50,
    width: 90,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  card: {
    marginTop: 30,
    borderColor: "#00a99d",
    borderWidth: 1,
    borderRadius: 12,
    padding: 20,
    width: 400,
  },
  cardTitle: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    marginBottom: 12,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: "#eaeaea",
    marginBottom: 15,
  },
  jobType: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },
  shift: {
    fontSize: 15,
    color: "#333",
    marginVertical: 6,
  },
  incomeBox: {
    backgroundColor: "#E8F9F7",
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
  },
  salary: {
    color: "#00a99d",
    fontWeight: "800",
    fontSize: 22,
  },
  subText: {
    fontSize: 15,
    color: "#444",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  locationText: {
    marginLeft: 5,
    fontSize: 15,
    color: "#333",
  },
  bold: {
    fontWeight: "700",
  },
  button: {
    backgroundColor: "#00a99d",
    borderRadius: 40,
    paddingVertical: 16,
    paddingHorizontal: 80,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
