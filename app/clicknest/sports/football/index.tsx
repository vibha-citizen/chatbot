import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function FootballMenu() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#F7EDFF", "#EEDDFF", "#E5CCFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.glowOne} />
      <View style={styles.glowTwo} />

      <Text style={styles.title}>Football</Text>

      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.85}
        onPress={() => router.push("/clicknest/sports/football/images")}
      >
        <Text style={styles.cardText}>📸Images</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.85}
        onPress={() => router.push("/clicknest/sports/football/videos")}
      >
        <Text style={styles.cardText}>🎥Videos</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  glowOne: {
    position: "absolute",
    width: 210,
    height: 210,
    borderRadius: 105,
    backgroundColor: "rgba(170,96,255,0.22)",
    top: -70,
    right: -50,
  },
  glowTwo: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "rgba(195,120,255,0.2)",
    bottom: 110,
    left: -60,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 38,
    color: "#5A1F9F",
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.78)",
    paddingVertical: 26,
    borderRadius: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(171,97,255,0.24)",
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  cardText: {
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    color: "#5A1F9F",
  },
});
