import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Pickingstart() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Topsection}>
        <View style={{}}>
          <Text style={{ fontWeight: 600 }}>New PickList</Text>
          <Text>Order ID: 1096547839</Text>
          <Text>Assigned to: 1096547839</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 5 }}>
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
      <View style={styles.imgbtn}>
        <Image
          style={styles.images}
          source={require("../../assets/images/syrup.png")}
        ></Image>
        {/* <TouchableOpacity>
          <View style={styles.countbtn}>
            <Text style={{ color: "#fff" }}>1</Text>
          </View>
        </TouchableOpacity> */}

        <Image
          style={styles.images}
          source={require("../../assets/images/syrup.png")}
        ></Image>
      </View>

      <View style={styles.Top1}>
        <View>
          <Text>Rack No.</Text>
          <Text>A2-031-04-C</Text>
        </View>
        <View>
          <Text>SKU ID</Text>
          <Text>SKU45678</Text>
        </View>
      </View>
      <View style={styles.Top2}>
        <Image
          style={styles.syrup}
          source={require("../../assets/images/syrup.png")}
        ></Image>
        <View style={{ gap: 40, marginTop: 40 }}>
          <View style={styles.quantity}>
            <Text>Quantity</Text>
            <Text style={{ color: "#00a99d" }}>1</Text>
          </View>
          <View style={styles.midtext}>
            <Text>Weight</Text>
            <Text style={{ fontWeight: 600 }}>40ml</Text>
          </View>
          <View style={styles.midtext}>
            <Text>Price</Text>
            <Text style={{ fontWeight: 600 }}>Rs 120</Text>
          </View>
        </View>
      </View>
      <View style={styles.Topdown}>
        <View>
          <Text>Product Name</Text>
          <Text>Complete name</Text>
        </View>
        <View
          style={{
            borderColor: "#fff",
            backgroundColor: "#fff",
            borderWidth: 1.5,
            borderRadius: 12,
            justifyContent: "center",
            padding: 3,
          }}
        >
          <TouchableOpacity>
            <Text>Category name</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 13, marginTop: 20, padding: 12 }}>
          unable to scan? Enter Manually
        </Text>
        <TouchableOpacity>
          <View
            style={{
              borderColor: "#fff",
              backgroundColor: "#F1FAF9",
              borderWidth: 1.5,
              borderRadius: 12,
              justifyContent: "center",
              padding: 12,
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 12 }}>Enter Code here</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => router.push('/Home/Pickingdone')}>
        <View style={styles.startbtn}>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Start Picking
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Topsection: {
    backgroundColor: "#F1FAF9",
    flexDirection: "row",
    gap: 65,
    padding: 20,
  },
  Timebtn: {
    backgroundColor: "#00a99d",
    borderColor: "#00a99d",
    borderWidth: 1,
    borderRadius: 8,
    padding: 2,
    flexDirection: "column",
    height: 50,
    width: 50,
    justifyContent: "center",
    marginTop: 4,
  },
  Timetext: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 18,
    textAlign: "center",
  },
  sectext: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 10,
    textAlign: "center",
  },
  images: {
    height: 80,
    width: 80,
    borderWidth: 2,
    borderColor: "#00a99d",
    borderRadius: 15,
  },
  imgbtn: {
    padding: 10,
    flexDirection: "row",
    gap: 8,
  },
  // countbtn: {
  //   borderWidth: 2,
  //   borderColor: "#00a99d",
  //   backgroundColor: "#00a99d",
  //   borderRadius: 8,
  //   padding: 8,
  //   width: 30,
  // },
  middlepart: {
    backgroundColor: "#fff",
  },
    quantity:{
        flexDirection: "row",
        gap: 60,
        borderColor:"#F1FAF9",
         backgroundColor: "#F1FAF9",
         padding:10,
         borderRadius:10,

      },
  Top1: {
    backgroundColor: "#F1FAF9",
    flexDirection: "row",
    gap: 200,
    padding: 10,
  },
  syrup: {
    height: 200,
    width: 200,
    marginTop:40,
  },
  Top2: {
    flexDirection: "row",
  },
  midtext: {
    flexDirection: "row",
    gap: 70,
  },
  Topdown: {
    backgroundColor: "#F1FAF9",
    flexDirection: "row",
    gap: 130,
    padding: 10,
  },
  startbtn: {
    borderWidth: 1,
    borderColor: "#00a99d",
    backgroundColor: "#00a99d",
    padding: 10,
    borderRadius: 20,
    marginTop: 70,
    margin: 12,
  },
});
