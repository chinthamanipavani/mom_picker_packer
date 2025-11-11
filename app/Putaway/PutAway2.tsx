import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const PutAway2 = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}>
      <TouchableOpacity onPress={() => router.push("/Putaway/PutAway")}>
        <View style={{flexDirection: "row",backgroundColor: "#00A79B1A",alignItems: "center", paddingVertical: 10, paddingHorizontal: 15, borderRadius: 10, marginTop: 10, }}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#00A79B" />
          <Text style={{ fontWeight: "600", fontSize: 20, marginLeft: 8, color: "#333", }}>Putaway</Text>
        </View>
      </TouchableOpacity>
      <View style={{ backgroundColor: "#00A79B1A", margin: 15, borderRadius: 10, padding: 10, }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 5,}} >
          <View>
            <Text style={{ fontWeight: "400", color: "#555" }}> Scanned Location </Text>
            <Text style={{ fontWeight: "600", color: "#000" }}>4A-45C</Text>
          </View>
          <View>
            <Text style={{ fontWeight: "400", color: "#555" }}>SKU ID</Text>
            <Text style={{ fontWeight: "500", color: "#000" }}>SKU45678</Text>
          </View>
        </View>
        <View style={{ flexDirection: width < 600 ? "column" : "row", alignItems: "center", justifyContent: "center", backgroundColor: "#fff", borderRadius: 8,padding: 10, marginTop: 10,}}>
          <View style={{ alignItems: "center", marginBottom: width < 600 ? 15 : 0 }}>
            <Image source={require("../../assets/images/syrup.png")} style={{ width: width * 0.6, height: width * 0.6, maxWidth: 250, maxHeight: 250, resizeMode: "contain",}}/>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", width: width < 600 ? "100%" : "40%",}} >
            <View style={{ backgroundColor: "#00A79B1A", padding: 15, marginVertical: 10, width: "90%", borderRadius: 8,justifyContent: "space-between", alignItems: "center",flexDirection: "row", }}>
              <Text style={{ flexShrink: 1, color: "#333", fontWeight: "500", flexWrap: "wrap", width: "70%", }}>Quantity on Location</Text>
              <Text style={{ color: "#00A79B", fontSize: 22, fontWeight: "700" }}>1</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", paddingHorizontal: 10,}} >
              <Text style={{ color: "#555" }}>Weight</Text>
              <Text style={{ fontWeight: "bold", color: "#000" }}>40ml</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15, paddingHorizontal: 5, }} >
          <View>
            <Text style={{ color: "#555" }}>Product Name</Text>
            <Text style={{ fontWeight: "600", fontSize: 18, color: "#000" }}> Complete name </Text>
          </View>
          <Text style={{ backgroundColor: "white", color: "#00A79B", borderRadius: 10, paddingVertical: 8, paddingHorizontal: 15, fontWeight: "500", fontSize: 14, overflow: "hidden", }}>Category name</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 15, marginTop: 20, }}>
        <Text style={{ backgroundColor: "#00A79B1A", borderRadius: 5, paddingVertical: 10, paddingHorizontal: 15, color: "#00A79B", fontWeight: "500", }} >No. of Quantity Kept </Text>
        <View style={{ flexDirection: "row",alignItems: "center", backgroundColor: "#00A79B", borderRadius: 8, paddingHorizontal: 15, paddingVertical: 10, }} >
          <MaterialIcons name="delete-outline" size={22} color="white" />
          <Text style={{ color: "white", fontSize: 18, marginHorizontal: 10 }}> 1 </Text>
          <AntDesign name="plus" size={20} color="white" />
        </View>
      </View>
      <TouchableOpacity onPress={() => alert("Item Kept Successfully!")}
        style={{ backgroundColor: "#00A79B", borderRadius: 15, marginHorizontal: 15, marginTop: 30, paddingVertical: 14,}} >
        <Text style={{ textAlign: "center", color: "white", fontSize: 18, fontWeight: "600", }} >  Item Kept</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PutAway2;
