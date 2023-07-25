import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.header}>
        <View>
          <Text style={{ fontSize: 36 }}>Currency Converter</Text>
        </View>
      </SafeAreaView>
      <View style={{ alignItems: "center", height: 50, paddingTop: 5 }}>
        <Text>Convert from:</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text>Conver to:</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    height: 150,
    backgroundColor: "lavender",
    alignItems: "center",
    justifyContent: "center",
  },
});
