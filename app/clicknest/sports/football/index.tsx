import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function FootballMenu() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Football</Text>

      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => router.push("/clicknest/sports/football/images")}
      >
        <Text style={styles.cardText}>📸 Images</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => router.push("/clicknest/sports/football/videos")}
      >
        <Text style={styles.cardText}>🎥 Videos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5A1AFF", // Deep purple background
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 40,
    color: "#FFFFFF",
    letterSpacing: 1,
  },
  card: {
    backgroundColor: "#E9D5FF", // Light purple card
    paddingVertical: 26,
    borderRadius: 18,
    marginBottom: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },
  cardText: {
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    color: "#4C1D95", // Dark purple text
  },
});