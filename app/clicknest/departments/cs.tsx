import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CSDepartment() {
  return (
    <LinearGradient colors={["#F9F1FF", "#F0E6FF", "#E7DBFF"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Department of CS</Text>

        <Image source={require("../../../assets/images/cs.png")} style={styles.image} />
        <Image source={require("../../../assets/images/cs1.jpeg")} style={styles.image} />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 16, paddingBottom: 22 },
  title: {
    fontSize: 24,
    fontWeight: "900",
    color: "#5320A1",
    textAlign: "center",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "rgba(150,102,255,0.24)",
  },
});
