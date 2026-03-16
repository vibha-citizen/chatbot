import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function VideosScreen() {
  return (
    <LinearGradient colors={["#F9F2FF", "#F0E6FF", "#E7DBFF"]} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Badminton Videos</Text>
        <Text style={styles.sub}>Videos section will be updated soon.</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 18 },
  card: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(145,95,255,0.2)",
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: "900", color: "#4D1F9A", textAlign: "center" },
  sub: { fontSize: 14, color: "#6F5AA4", textAlign: "center", marginTop: 8 },
});
