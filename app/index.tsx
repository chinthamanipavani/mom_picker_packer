// import { Image, StyleSheet, Text, View } from "react-native";

// export default function Home() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to MOM_PIKER_PACKER</Text>
//       <Text style={styles.subtitle}>
//         Manage your orders efficiently and track every package in real-time.
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f9f9f9",
//     paddingHorizontal: 20,
//   },
//   image: {
//     width: 150,
//     height: 150,
//     marginBottom: 25,
//     resizeMode: "contain",
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#2c3e50",
//     marginBottom: 10,
//     textAlign: "center",
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#555",
//     textAlign: "center",
//     lineHeight: 22,
//   },
// });

import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/BottomNavBar/home")}
      >
        <Text style={styles.buttonText}>Go to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, marginBottom: 20 },
  button: {
    backgroundColor: "#00a99d",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
