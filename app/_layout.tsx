// import { Stack } from "expo-router";
// import { StatusBar } from "expo-status-bar";
// import { View } from "react-native";

// export default function Layout() {
//   return (
//     <View style={{ flex: 1 }}>
//       <StatusBar style="auto" />
//       <Stack screenOptions={{ headerShown: false }} >
//       <Stack.Screen name="BottomNavBar" />
//       </Stack>
//     </View>
//   );
// }
// app/_layout.tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
