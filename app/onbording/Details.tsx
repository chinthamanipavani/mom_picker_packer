import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Details = () => {
  const [value, setValue] = useState("");
  const [selectedGender, setSelectedGender] = useState("Male");
  const [open, setOpen] = useState(false);
  const allGenders = ["Male", "Female", "Other"];
  const remainingGenders = allGenders.filter((g) => g !== selectedGender);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginTop:20
      }}
    >
      <View>
        <View>
          <Text style={{ color: "#00A79B", fontSize: 38, fontWeight: 500 }}>
            mompharmacy
          </Text>
          <Text style={{ fontWeight: 500, fontSize: 24 }}>
            Operations Onboarding
          </Text>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: 400,
            marginTop: 35,
          }}
        >
          Add your details
        </Text>

        <View style={{}}>
          <Text
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              backgroundColor: "#FFFFFF",
              paddingHorizontal: 5,
              fontWeight: "400",
              zIndex: 2,
            }}
          >
            Enter your name
          </Text>

          <TextInput
            value={value}
            onChangeText={setValue}
            style={{
              borderWidth: 2,
              borderRadius: 8,
              position: "relative",
              width: 300,
              backgroundColor: "#00A79B1A",
              marginTop: 20,
              borderColor: "#00A79B",
              padding: 8,
              fontSize: 14,
            }}
          />
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ marginTop: 30, fontWeight: 400, textAlign: "center" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 100,
              }}
            >
              <Text> select yoyr Gender</Text>

              <View>
                <TouchableOpacity
                  onPress={() => setOpen(!open)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    //   alignItems:"center",
                    borderWidth: 1,
                    gap: 10,
                    borderColor: "#00A79B",
                    borderRadius: 8,
                    padding: 4,
                  }}
                >
                  <Text style={{ fontSize: 14, color: "#00A79B" }}>
                    {selectedGender}
                  </Text>
                  <Text style={{ color: "#00A79B" }}>✓</Text>
                </TouchableOpacity>

                {open &&
                  remainingGenders.map((gender) => (
                    <TouchableOpacity
                      key={gender}
                      onPress={() => {
                        setSelectedGender(gender);
                        setOpen(false);
                      }}
                      style={{
                        padding: 4,
                        borderWidth: 1,
                        borderColor: "#00A79B",
                        borderRadius: 8,
                        marginTop: 5,
                      }}
                    >
                      <Text style={{ fontSize: 14, color: "#00A79B" }}>
                        {gender}
                      </Text>
                    </TouchableOpacity>
                  ))}
              </View>
            </View>
          </Text>
        </View>
      </View>

      <View>
        <TouchableOpacity>
          <Text style={styles.container}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "white",
    padding: 10,
    textAlign: "center",
    borderRadius: 30,
    backgroundColor: "#00A79B",
    width: 300,
    height: 40,
    fontSize:16,
    marginTop: -50,
  },
});

export default Details;
