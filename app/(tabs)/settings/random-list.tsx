import { Text, View } from "@/components/Themed";
import { StyleSheet } from "react-native";

export default function RandomList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random List</Text>
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
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
