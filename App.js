import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { currOptions } from "./Options";
import Picker from "@ouroboros/react-native-picker";

export default function App() {
  const [fromCur, setFromCur] = useState("USD");
  const [toCur, setToCur] = useState("EUR");

  return (
    <>
      <SafeAreaView style={styles.header}>
        <View>
          <Text style={{ fontSize: 36 }}>Currency Converter</Text>
        </View>
      </SafeAreaView>
      <View
        style={{
          alignItems: "center",
          paddingTop: 5,
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 24 }}>Convert from:</Text>
        <Picker
          onChanged={setFromCur}
          options={currOptions}
          style={{
            borderWidth: 1,
            borderColor: "#a7a7a7",
            borderRadius: 5,
            marginBottom: 5,
            padding: 5,
            width: 300,
            textAlign: "center",
          }}
          value={fromCur}
        />
        <Text style={{ fontSize: 24, marginTop: 20 }}>Convert to:</Text>
        <Picker
          onChanged={setToCur}
          options={currOptions}
          style={{
            borderWidth: 1,
            borderColor: "#a7a7a7",
            borderRadius: 5,
            marginBottom: 5,
            padding: 5,
            width: 300,
          }}
          value={toCur}
        />
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
