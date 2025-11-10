import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";

import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const PutAway = () => {
  return (
    <View style={{ borderRadius: 20 }}>
      <TouchableOpacity onPress={() => router.push("/Home/Inbound")}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#00A79B1A",
            alignItems: "center",
            padding: 4,
            gap: 8,
          }}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#00A79B" />
          <Text style={{ fontWeight: 500, fontSize: 20 }}>Putaway</Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          borderWidth: 2,
          borderColor: "#00A79B",
          padding: 10,
          margin: 15,
          backgroundColor: "#00A79B1A",
          borderRadius: 10,
        }}
      >
        <Text style={{ textAlign: "center", padding: 2, fontWeight: 300 }}>
          Slot Details: 06:00 PM - 08:00 PM
        </Text>

        <View
          style={{ flexDirection: "row", flex: 1, justifyContent: "center" }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              borderWidth: 2,
              borderColor: "white",
              backgroundColor: "white",
              borderRadius: 8,
              //   padding: 10,
              margin: 5,
              width: 100,
              height: 150,
            }}
          >
            <Image
              source={require("../../assets/images/img5.jpg")}
              style={{ width: 30, height: 60 }}
            />

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 20, color: "#00A79B" }}>02:30</Text>
              <Text style={{ fontWeight: "500" }}> hrs</Text>
            </View>
            <Text>Active hours</Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              borderWidth: 2,
              borderColor: "white",
              backgroundColor: "white",
              borderRadius: 8,
              //   padding: 10,
              margin: 5,
              width: 100,
            }}
          >
            <Image
              source={require("../../assets/images/img2.jpg")}
              style={{ width: 60, height: 60 }}
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, color: "#00A79B" }}>3</Text>
              <Text style={{ fontWeight: "500" }}> Items</Text>
            </View>

            <Text>Picked</Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              borderWidth: 2,
              borderColor: "white",
              backgroundColor: "white",
              borderRadius: 8,
              //   padding: 10,
              margin: 5,
              width: 100,
            }}
          >
            <Image
              source={require("../../assets/images/img3.jpg")}
              style={{ width: 60, height: 60 }}
            />

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons
                name="currency-rupee"
                size={24}
                color="black"
                style={{ fontSize: 20, color: "#00A79B", marginTop: 10 }}
              />{" "}
              <Text style={{ fontWeight: "500" }}> 2000</Text>
            </View>

            <Text>Earnings</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          flex: 1,
          gap: 10,
          margin: 15,
          marginTop: 10,
          padding: 10,
          //   justifyContent:"flex-start",
          borderWidth: 2,
          borderColor: "#00A79B",
          backgroundColor: "#00A79B1A",
          borderRadius: 7,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            gap: 10,
            // justifyContent:"space-around",
            alignItems: "center",
          }}
        >
          <Entypo
            name="text-document"
            size={34}
            color="black"
            style={{
              fontSize: 40,
              color: "#00A79B",
              marginTop: 10,
              marginLeft: 10,
            }}
          />
          <Text style={{ marginTop: 8, fontWeight: "400", fontSize: 18 }}>
            Previous putway details
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#00A79B", fontSize: 19, marginLeft: 580 }}>
            View Details
          </Text>
          <Text>
            <MaterialCommunityIcons
              name="arrow-right"
              size={28}
              color="black"
              style={{ fontSize: 20, color: "#00A79B", marginTop: 10 }}
            />{" "}
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => router.push("/Putaway/PutAway2")}>
        <View>
          <MaterialIcons
            name="qr-code-scanner"
            size={174}
            color="black"
            style={{ textAlign: "center", color: "#00A79B" }}
          />
          <Text
            style={{
              textAlign: "center",
              color: "#00A79B",
              fontSize: 18,
              marginTop: 10,
            }}
          >
            Scan QR Code on rack{" "}
          </Text>
          <Text style={{ textAlign: "center", color: "#00A79B", fontSize: 18 }}>
            to start putting items
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PutAway;
