import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { currOptions } from "./Options";
import { SelectList } from "react-native-dropdown-select-list";

export default function App() {
  const [fromCur, setFromCur] = useState("");
  const [toCur, setToCur] = useState("");

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
        <SelectList
          setSelected={(val) => setFromCur(val)}
          data={currOptions}
          save="text"
          defaultOption={{ key: "USD", value: "United States Dollars" }}
          boxStyles={{ width: 300 }}
        />
        <Text style={{ fontSize: 24, marginTop: 20 }}>Convert to:</Text>
        <SelectList
          setSelected={(val) => setToCur(val)}
          data={currOptions}
          save="text"
          defaultOption={{ key: "EUR", value: "Euros" }}
          boxStyles={{ width: 300 }}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          paddingTop: 5,
          flex: 1,
        }}
      >
        <View style={{ alignItems: "center", flex: 2, justifyContent: "flex-start", marginTop: 20 }}>
          <Text style={{ fontSize: 30}}>1 {fromCur} = ___ {toCur}</Text>
          
        </View>
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
