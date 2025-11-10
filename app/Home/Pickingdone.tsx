import { MaterialIcons } from '@expo/vector-icons';
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Pickingdone() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Topsection}>
        <View style={{}}>
          <Text>Order ID</Text>
          <Text>OID45678</Text>
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

      <View style={{ flexDirection: "row", gap: 55, marginTop: 100,padding:5 }}>
        <View style={{gap:8}}>
          <Text>Quantity on Location</Text>
          <Text style={{fontWeight:900}}>5</Text>
          <View style={styles.quantity}>
            <Text style={{ color: "#00a99d" }}>No. of Quantity Picked</Text>
          </View>
        </View>

        <View style={{gap:14}}>
          <View>
            <Text>Scanned Location</Text>
            <Text style={{ fontWeight: 900, }}>4A-45C</Text>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity>
                 <MaterialIcons name="delete" size={20} color="#fff" />
          
            </TouchableOpacity>
             <TouchableOpacity>
              <Text style={{color:"#fff"}}>1</Text>
          
            </TouchableOpacity>
             <TouchableOpacity>
              <Text style={{color:"#fff", fontSize:27}}>+</Text>
          
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.startbtn}>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Item Picked
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
    gap: 150,
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
    borderWidth: 2,
    borderColor: "#00a99d",
    borderRadius: 15,
     height: 80,
    width: 80,

  },
  imgbtn: {
    padding: 10,
    flexDirection: "row",
    gap: 8,
  },
  middlepart: {
    backgroundColor: "#fff",
  },
  Top1: {
    backgroundColor: "#F1FAF9",
    flexDirection: "row",
    gap: 200,
    padding: 10,
    marginTop: 20,
  },
  syrup: {
    height: 200,
    width: 200,
    marginTop:40
  },
  Top2: {
    flexDirection: "row",
  },
  midtext: {
    flexDirection: "row",
    gap: 60,
  },
  Topdown: {
    backgroundColor: "#F1FAF9",
    flexDirection: "row",
    gap: 120,
    padding: 10,
  
  },
  quantity: {
    flexDirection: "row",
    gap: 60,
    borderColor: "#F1FAF9",
    backgroundColor: "#F1FAF9",
    padding: 10,
    borderRadius: 10,
  },
  startbtn: {
    borderWidth: 1,
    borderColor: "#00a99d",
    backgroundColor: "#00a99d",
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    margin: 12,
  },
  btn: {
    borderColor: "#00a99d",
    backgroundColor: "#00a99d",
    padding:3,
    borderRadius: 18,
    alignItems: "center",
    flexDirection:"row",
    justifyContent:'space-evenly',
    width:100
  },
});
