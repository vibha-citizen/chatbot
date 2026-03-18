import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

export default function NssYrcMenu() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#F8F1FF", "#F2E8FF", "#EADDFE"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.hero}>
        <Text style={styles.title}>NSS / YRC</Text>
        <Text style={styles.sub}>Choose a wing to view details and activities.</Text>
      </View>

      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.9}
        onPress={() => router.push("/clicknest/NSS-YRC/nss")}
      >
        <Text style={styles.cardTitle}>National Service Scheme</Text>
        <Text style={styles.cardText}>Volunteer drives, camps, and social outreach.</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.9}
        onPress={() => router.push("/clicknest/NSS-YRC/yrc")}
      >
        <Text style={styles.cardTitle}>Youth Red Cross</Text>
        <Text style={styles.cardText}>First-aid training, blood drives, and safety rallies.</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 28 },
  hero: {
    backgroundColor: "rgba(255,255,255,0.86)",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(148,95,255,0.2)",
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 16,
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.14,
    shadowRadius: 6,
    elevation: 3,
  },
  title: { fontSize: 26, fontWeight: "900", color: "#4A1F8E", textAlign: "center" },
  sub: { textAlign: "center", color: "#6F4AAF", marginTop: 6, fontSize: 14, fontWeight: "600" },
  card: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(145,95,255,0.18)",
    padding: 16,
    marginBottom: 12,
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 2,
  },
  cardTitle: { fontSize: 18, fontWeight: "800", color: "#4A1F8E", marginBottom: 6 },
  cardText: { fontSize: 14, color: "#6B52A3" },
});
