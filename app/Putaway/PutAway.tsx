import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import React from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View, } from "react-native";

const { width } = Dimensions.get("window");

const PutAway = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity onPress={() => router.push("/Home/Inbound")}>
        <View style={{ flexDirection: "row", backgroundColor: "#00A79B1A", alignItems: "center", paddingVertical: 10, paddingHorizontal: 15, borderRadius: 10, marginTop: 10, }} >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#00A79B" />
          <Text style={{ fontWeight: "600", fontSize: 20, marginLeft: 8, color: "#333", }}>  Putaway</Text>
        </View>
      </TouchableOpacity>
      <View style={{ borderWidth: 2, borderColor: "#00A79B", padding: 15, margin: 15, backgroundColor: "#00A79B1A", borderRadius: 10, }} >
        <Text style={{ textAlign: "center", fontWeight: "400", marginBottom: 10 }}> Slot Details: 06:00 PM - 08:00 PM</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap",  }}>
          <View style={{  alignItems: "center",  backgroundColor: "white",  borderRadius: 10,  width: width * 0.28,  minWidth: 100,  padding: 10,  marginVertical: 8,  shadowColor: "#000",  shadowOpacity: 0.1,  shadowRadius: 4,  elevation: 3, }} >
            <Image source={require("../../assets/images/img5.jpg")} style={{ width: 40, height: 60, resizeMode: "contain" }} />
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 6 }}>
              <Text style={{ fontSize: 18, color: "#00A79B", fontWeight: "600" }}>  02:30</Text>
              <Text style={{ fontWeight: "500" }}> hrs</Text>
            </View>
            <Text style={{ marginTop: 4 }}>Active hours</Text>
          </View>
          <View style={{ alignItems: "center", backgroundColor: "white", borderRadius: 10, width: width * 0.28, minWidth: 100, padding: 10, marginVertical: 8, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 4, elevation: 3,}}>
            <Image source={require("../../assets/images/img2.jpg")} style={{ width: 60, height: 60, resizeMode: "contain" }}/>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 6 }}>
              <Text style={{ fontSize: 18, color: "#00A79B", fontWeight: "600" }}> 3   </Text>
              <Text style={{ fontWeight: "500" }}> Items</Text>
            </View>
            <Text style={{ marginTop: 4 }}>Picked</Text>
          </View>
          <View style={{ alignItems: "center", backgroundColor: "white", borderRadius: 10, width: width * 0.28, minWidth: 100, padding: 10, marginVertical: 8, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 4, elevation: 3, }}>
            <Image source={require("../../assets/images/img3.jpg")} style={{ width: 60, height: 60, resizeMode: "contain" }} />
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 6 }}>
              <MaterialIcons  name="currency-rupee" size={18} color="#00A79B" />
              <Text style={{ fontWeight: "500", fontSize: 16 }}>2000</Text>
            </View>
            <Text style={{ marginTop: 4 }}>Earnings</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 15, marginBottom: 15, padding: 15, borderWidth: 2, borderColor: "#00A79B", backgroundColor: "#00A79B1A", borderRadius: 10, justifyContent: "space-between", flexWrap: "wrap", }} >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Entypo name="text-document" size={34} color="#00A79B" />
          <Text style={{ marginLeft: 10, fontWeight: "500", fontSize: 18 }}> Previous putaway details </Text>
        </View>

        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => router.push("/Putaway/History")} >
          <Text style={{ color: "#00A79B", fontSize: 16, marginRight: 5 }}>  View Details</Text>
          <MaterialCommunityIcons name="arrow-right" size={24} color="#00A79B"/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => router.push("/Putaway/PutAway2")}>
        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <MaterialIcons name="qr-code-scanner" size={width * 0.45} color="#00A79B" />
          <Text style={{ textAlign: "center", color: "#00A79B", fontSize: 18, marginTop: 10, }} > Scan QR Code on rack </Text>
          <Text style={{ textAlign: "center", color: "#00A79B", fontSize: 18, }} > to start putting items</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PutAway;
