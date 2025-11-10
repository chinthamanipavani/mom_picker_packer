import { CameraView, useCameraPermissions } from "expo-camera";
import React, { useEffect, useRef, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CaptureSelfieScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState(null);
  const [cameraOpen, setCameraOpen] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    if (!permission) requestPermission();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const pic = await cameraRef.current.takePictureAsync();
      setPhoto(pic.uri);
      setCameraOpen(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>mompharmacy</Text>
      <Text style={styles.subtitle}>Operations Onboarding</Text>

      <Text style={styles.label}>Capture Selfie</Text>

      <View style={styles.previewBox}>
        {cameraOpen ? (
          <CameraView
            ref={cameraRef}
            style={styles.camera}
            facing="front"
          >
            <TouchableOpacity style={styles.captureButton} onPress={takePicture} />
          </CameraView>
        ) : photo ? (
          <Image source={{ uri: photo }} style={styles.camera} />
        ) : (
          <TouchableOpacity
            style={styles.emptyBox}
            onPress={() => setCameraOpen(true)}
          >
            <Text style={styles.tapText}>Tap to open camera</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 40,
    marginTop:20,
  },
  logo: {
    fontSize: 28,
    fontWeight: "800",
    color: "#00A99D",
  },
  subtitle: {
    fontSize: 18,
    color: "#222",
    marginBottom: 60,
  },
  label: {
    fontSize: 20,
    color: "#333",
    marginBottom: 15,
    marginTop:50,
  },
  previewBox: {
    width: 300,
    height: 480,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#00A99D",
    overflow: "hidden",
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
  },
  emptyBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tapText: {
    color: "#aaa",
    fontSize: 16,
  },
  captureButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: "#00A99D",
  },
});
