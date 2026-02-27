import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function CSDepartment() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>💻 Department of CS</Text>

      <Image
        source={require("../../../assets/images/cs.png")}
        style={styles.image}
      />

      <Image
        source={require("../../../assets/images/cs1.jpeg")}
        style={styles.image}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF5FF",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6D28D9",
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 15,
  },
});