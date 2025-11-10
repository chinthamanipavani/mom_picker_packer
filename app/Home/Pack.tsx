import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const index = () => {
  return (
    <>
      <View style={styles.container}>
          <View style={styles.header}>
                <Ionicons name="arrow-back" size={24} color="#00a99d" onPress={() => router.back()}/>
                <Text style={styles.headerTitle}>  Picking</Text>
              </View>
        <View style={styles.orderbtn}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 4,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/images/img6.jpg")}
              style={styles.image}
            />
            <Text style={styles.text1}>Previous order details</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.text2}>View Details</Text>
            <MaterialIcons name="arrow-forward" size={28} style={styles.icon} />
          </View>
        </View>
        <View style={styles.middlebtn}>
          <Image
            source={require("../../assets/images/img4.jpg")}
            style={styles.lockimg}
          />
          <Text style={{ padding: 8 }}>Searching for order...</Text>
          <TouchableOpacity>
            <View style={styles.btn}>
              <Image source={require("../../assets/images/img1.jpg")} />
              <Text style={{ textAlign: "center" }}>Fetch Order</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.slotdetails}>
          <Text style={{ textAlign: "center", padding: 12, fontSize: 15 }}>
            Slot Details: 06:00 PM - 08:00 PM
          </Text>
          <View style={{ flexDirection: "row", gap: 6 }}>
            <View style={styles.slot1}>
              <Image source={require("../../assets/images/img5.jpg")} />
              <Text style={{ fontWeight: "bold", color: "#00a99d" }}>
                02:30
                <Text style={{ fontWeight: "bold", color: "black" }}> hrs</Text>
              </Text>

              <Text>Active hours</Text>
            </View>
            <View style={styles.slot1}>
              <Image source={require("../../assets/images/img2.jpg")} />
              <Text style={{ fontWeight: "bold", color: "#00a99d" }}>
                3<Text style={{ fontWeight: "bold", color: "black" }}> Items</Text>
              </Text>
              <Text>Picked</Text>
            </View>
            <View style={styles.slot1}>
              <Image source={require("../../assets/images/img3.jpg")} />

              <Text style={{ fontWeight: "bold", color: "#00a99d" }}>
                ₹
                <Text style={{ fontWeight: "bold", color: "black" }}> 2000</Text>
              </Text>

              <Text>Earnings</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    header: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#00a99d",
  },
  icon: {
    color: "#00a99d",
    marginLeft: 8,
  },
  headertext: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  orderbtn: {
    flexDirection: "row",
    marginTop: 12,
    borderWidth: 2,
    borderColor: "#00a99d",
    padding: 12,
    backgroundColor: "#00a99d1a",
    borderRadius: 12,
    margin: 20,
    justifyContent: "space-between",
  },
  middlebtn: {
    flexDirection: "column",
    marginTop: 12,
    borderWidth: 2,
    borderColor: "#00a99d",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    margin: 20,
    alignItems: "center",
  },
  image: {
    height: 23,
    width: 18,
    color: "#00a99d",
  },
  lockimg: {
    height: 90,
    width: 90,
    padding: 5,
    alignItems: "center",
  },
  text1: {
    fontSize: 14,
    fontWeight: 600,
    justifyContent: "flex-start",
  },
  text2: {
    fontSize: 14,
    fontWeight: 600,
    color: "#00a99d",
    justifyContent: "flex-end",
  },
  btn: {
    borderColor: "#00a99d",
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    flexDirection: "row",
    gap: 7,
  },
  slotdetails: {
    flexDirection: "column",
    marginTop: 12,
    borderWidth: 2,
    borderColor: "#00a99d",
    padding: 12,
    backgroundColor: "#00a99d1a",
    borderRadius: 12,
    margin: 20,
    alignItems: "center",
  },
  slot1: {
    backgroundColor: "#fff",
    height: 100,
    width: 90,
    alignItems: "center",
  },
});