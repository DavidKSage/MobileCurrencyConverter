import { SafeAreaView, StyleSheet, View, Text } from "react-native";

const Header = ({title}) => {
    return (
        <SafeAreaView style={styles.header}>
            <Text style={{ fontSize: 36 }}>{title}</Text>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
      height: "15%",
      backgroundColor: "lavender",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default Header;