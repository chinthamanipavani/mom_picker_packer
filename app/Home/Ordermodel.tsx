import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Ordermodel = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ height: 35, width: 35 }}
            source={require("../../assets/images/img4.jpg")}
          ></Image>
          <Text style={{ fontSize: 17, fontWeight: 700 }}>Order Picking</Text>
        </View>
        <View style={styles.middleview}>
          <Text style={{ fontSize: 15, fontWeight: 600 }}>Quantity</Text>
          <Text style={{ fontWeight: 700, fontSize: 50, color: "#00a99d" }}>
            4
          </Text>
          <Text style={{ fontSize: 14, fontWeight: 600 }}>Items</Text>
        </View>

        <View style={styles.bottombtn}>
          <View
            style={{ flexDirection: "row", gap: 140, alignItems: "center" }}
          >
            <View>
              <Text style={{ flexDirection: "column" }}>Order ID</Text>
              <Text style={{ fontWeight: 600 }}>OID45678 </Text>
            </View>

            <View style={{ flexDirection: "row", gap: 6 }}>
              <View style={styles.Timebtn}>
                <Text style={styles.Timetext}>01</Text>
                <Text style={styles.sectext}>MIN</Text>
              </View>
              <View style={styles.Timebtn}>
                <Text style={styles.Timetext}>30</Text>
                <Text style={styles.sectext}>SEC</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => router.push("/Home/Pickingstart")}>
          <View style={styles.startbtn}>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontWeight: 600,
                fontSize: 18,
              }}
            >
              Start Picking
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Ordermodel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    
    
  },
  middleview: {
    alignItems: "center",
    padding: 20,
    flexDirection: "column",
  },
  bottombtn: {
    borderColor: "#00a99d",
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
    padding: 7,
    backgroundColor: "#F1FAF9",
  },
  Timebtn: {
    backgroundColor: "#00a99d",
    borderColor: "#00a99d",
    borderWidth: 1,
    borderRadius: 8,
    padding: 2,
    flexDirection: "column",
    height:50,
    width:50,
    justifyContent:"center",
   
  },
  Timetext: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 18,
     textAlign:"center"
  },
  sectext: {
     color: "#fff",
    fontWeight: "900",
    fontSize: 10,
     textAlign:"center"
  },
  startbtn: {
    borderWidth: 1,
    borderColor: "#00a99d",
    backgroundColor: "#00a99d",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
  },
});
