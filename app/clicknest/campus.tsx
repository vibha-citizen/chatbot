import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Campus() {
  return (
    <LinearGradient colors={["#F8F1FF", "#F0E5FF", "#E8DBFF"]} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Campus Life</Text>
        <Text style={styles.sub}>Fresh themed layout is ready here.</Text>
        <Text style={styles.note}>Detailed campus content will be added next.</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  card: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.78)",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(145,95,255,0.22)",
    padding: 22,
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 3,
  },
  title: { fontSize: 28, fontWeight: "900", color: "#4A1F8E", textAlign: "center" },
  sub: { fontSize: 16, fontWeight: "700", color: "#6B52A3", textAlign: "center", marginTop: 8 },
  note: { fontSize: 14, color: "#7A67A8", textAlign: "center", marginTop: 10 },
});
