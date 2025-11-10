import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const PutAway2 = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => router.push("/Putaway/PutAway")}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#00A79B1A",
            alignItems: "center",
            padding: 8,
            gap: 8,
          }}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color="#00A79B"
            style={{ marginTop: 20 }}
          />
          <Text style={{ fontWeight: 500, fontSize: 20, marginTop: 20 }}>
            Putaway
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{ backgroundColor: "#00A79B1A", margin: 20, borderRadius: 10 }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            gap: 8,
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View>
            <Text style={{ fontWeight: 300 }}>Scanned Location</Text>
            <Text style={{ fontWeight: 500 }}>4A-45C</Text>
          </View>
          <View>
            <Text style={{ fontWeight: 300 }}>SKU ID</Text>
            <Text style={{ fontWeight: 400 }}>SKU45678</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <Image
              source={require("../../assets/images/syrup.png")}
              style={{ height: 270, width: 270 }}
            />
          </View>
          <View style={{ flexDirection: "column" }}>
            <View
              style={{
                backgroundColor: "#00A79B1A",
                flexDirection: "row",
                padding: 12,
                margin: 10,
                width: 390,
                height: 120,
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Text>
                Quantity
                <br />
                on
                <br />
                Location
              </Text>
              <Text style={{ color: "#00a99d", fontSize: 22 }}>1</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-between",
                padding: 13,
              }}
            >
              <Text>Weight</Text>
              <Text style={{ fontWeight: "bold" }}>40ml</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
          }}
        >
          <View>
            <Text>ProductName</Text>
            <Text style={{ fontWeight: 500, fontSize: 20 }}>complete name</Text>
          </View>
          <Text
            style={{
              height: 40,
              backgroundColor: "white",
              color: "#00A79B",
              borderRadius: 10,
              padding: 7,
              alignItems: "center",
            }}
          >
            Categoryname
          </Text>
        </View>
      </View>
      <br />
      <br />
      <br /> <br />
      <br />
      <View
        style={{
          flex: 1,
          gap: 50,
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 15,
        }}
      >
        <Text
          style={{
            backgroundColor: "#00A79B1A",
            borderRadius: 5,
            marginLeft: 8,
            padding: 10,
            color: "#00A79B",
          }}
        >
          No.of Quality Kept{" "}
        </Text>

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginRight: 15,
            backgroundColor: "#00A79B",
            borderRadius: 8,
            padding: 10,
            alignItems: "center",
          }}
        >
          <MaterialIcons
            name="delete-outline"
            size={24}
            color="black"
            style={{ color: "white", fontSize: 16 }}
          />
          <Text style={{ color: "white", fontSize: 16 }}>1</Text>
          <AntDesign
            name="plus"
            size={14}
            color="black"
            style={{ color: "white" }}
          />
        </View>
      </View>
      <Text
        style={{
          textAlign: "center",
          color: "white",
          backgroundColor: "#00A79B",
          padding: 14,
          borderRadius: 15,
          margin: 15,
          fontSize: 18,
        }}
      >
        Item Kept
      </Text>
    </View>
  );
};

export default PutAway2;
