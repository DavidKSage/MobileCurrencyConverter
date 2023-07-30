import React, { useState } from "react";
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
        <Text styles={{ fontSize: 48 }}>Convert from:</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>From</Text>
      </View>
      <View style={{ alignItems: "center", height: 50 }}>
        <Text>Conver to:</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>From:</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ fontSize: 30 }}>1 USD = ______ EUR</Text>
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
