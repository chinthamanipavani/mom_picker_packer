import { BarCodeScanner } from "expo-barcode-scanner";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const ConsignmentScanningScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [scannedCode, setScannedCode] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedCode(data);
    setIsScannerOpen(false);
    alert(`Scanned Code: ${data}`);
  };

  if (isScannerOpen) {
    return (
      <View style={styles.scannerContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setIsScannerOpen(false)}
        >
          <Text style={styles.closeText}>Close Scanner</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Consignment Scanning</Text>
        <Text style={styles.subtitle}>Consignment ID: 1096547839</Text>
      </View>
      <TouchableOpacity
        style={styles.scanBox}
        onPress={() => {
          setScanned(false);
          setIsScannerOpen(true);
        }}
      >
        <Image source={require("@/assets/images/box.png")}
          style={styles.scanImage}
        />
        <Text style={styles.scanText}>
          {scannedCode ? `Scanned: ${scannedCode}` : "Scanning box ID"}
        </Text>
      </TouchableOpacity>
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>50</Text>
          <Text style={styles.statLabel}>Total Crates</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>25</Text>
          <Text style={styles.statLabel}>Unloaded</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.endButton} onPress={()=>router.push('/BottomNavBar/home')}>
        <Text style={styles.endButtonText}>End Unloading</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ConsignmentScanningScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1FAF9",
    alignItems: "center",
    padding: 20,
  },
  header: {
    marginTop: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1A1A1A",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  scanBox: {
    marginTop: 40,
    width: "90%",
    height: 250,
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#00AFA0",
    alignItems: "center",
    justifyContent: "center",
  },
  scanImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  scanText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 30,
  },
  statBox: {
    flex: 1,
    backgroundColor: "#E4F7F5",
    marginHorizontal: 8,
    borderRadius: 10,
    alignItems: "center",
    padding: 15,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
  },
  statLabel: {
    fontSize: 15,
    color: "#666",
  },
  endButton: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "#FDEAEA",
    paddingVertical: 15,
    width: "90%",
    borderRadius: 25,
    alignItems: "center",
  },
  endButtonText: {
    color: "#C10000",
    fontSize: 18,
    fontWeight: "700",
  },
  scannerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "#00000088",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  closeText: {
    color: "#fff",
    fontSize: 16,
  },
});
