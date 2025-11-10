import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function SelectWorkplace() {
  const [selected, setSelected] = useState(null);
  const router = useRouter();

  const workplaces = [
    { id: 1, name: "Workplace A", distance: "800 m", pay: "₹20k/month + ₹200 joining bonus", tags: ["Highest pay", "Closest to you"] },
    { id: 2, name: "Workplace B", distance: "800 m", pay: "₹20k/month + ₹200 joining bonus", tags: [] },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>

      <View style={{ backgroundColor: "#00A79D", paddingTop: 60, paddingHorizontal: 20, paddingBottom: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 22, fontWeight: "bold", marginTop: 10 }}>
          Select Workplace
        </Text>
      </View>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {workplaces.map((place) => (
          <TouchableOpacity
            key={place.id}
            onPress={() => setSelected(place.id)}
            style={{
              borderWidth: 1,
              borderColor: selected === place.id ? "#00A79D" : "#ccc",
              borderRadius: 12,
              padding: 15,
              marginBottom: 15,
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>{place.name}</Text>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: "#00A79D",
                  backgroundColor: selected === place.id ? "#00A79D" : "white",
                }}
              />
            </View>

            <Text style={{ color: "gray", marginTop: 5 }}>
              <Ionicons name="location-outline" size={14} /> Distance: {place.distance}
            </Text>

            <View style={{ flexDirection: "row", marginTop: 10, gap: 10 }}>
              {place.tags.map((tag, index) => (
                <Text
                  key={index}
                  style={{
                    backgroundColor: "#E0F7F5",
                    color: "#00A79D",
                    fontSize: 12,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 6,
                  }}
                >
                  {tag}
                </Text>
              ))}
            </View>

            <Text style={{ marginTop: 10, color: "#00A79D", fontWeight: "600" }}>
              {place.pay}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={{
          backgroundColor: "#00A79D",
          margin: 20,
          borderRadius: 30,
          paddingVertical: 18,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
          Confirm and proceed
        </Text>
      </TouchableOpacity>
    </View>
  );
}
