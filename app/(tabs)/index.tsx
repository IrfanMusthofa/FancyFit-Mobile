import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fancy Fit</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.name}>Irfan Musthofa - 18222056</Text>
      <Text style={styles.name}>Theo Livius Natael - 18222076</Text>
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    fontFamily: "Inter",
    color: "#660033",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  name: {
    fontSize: 18,
    fontWeight: "normal",
  },
});
