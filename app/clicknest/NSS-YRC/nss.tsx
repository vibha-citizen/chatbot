import { LinearGradient } from "expo-linear-gradient";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function NssPage() {
  const router = useRouter();
  return (
    <LinearGradient
      colors={["#FFF7F0", "#F5E6FF", "#E8DBFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.title}>National Service Scheme (NSS)</Text>
          <Text style={styles.sub}>Volunteer drives, outreach, and impact snapshots.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.line}>- Road safety rallies and disaster preparedness drills</Text>
          <Text style={styles.line}>- Hundiyal counting and community fund stewardship</Text>
          <Text style={styles.line}>- Village adoption projects with weekend clean-ups</Text>
          <Text style={styles.line}>- Tree plantation & plastic-free campaigns on campus</Text>
          <Text style={styles.line}>- Annual camp schedule and signup links can be placed here</Text>
        </View>

        <View style={styles.mediaRow}>
          <View style={styles.mediaBox}>
            <Text style={styles.mediaTitle}>Images</Text>
            <Pressable
              style={styles.reveal}
              onPress={() => router.push("/clicknest/NSS-YRC/nss-gallery")}
            >
              <Text style={styles.revealText}>Tap to open gallery</Text>
            </Pressable>
          </View>
          <View style={styles.mediaBox}>
            <Text style={styles.mediaTitle}>Videos</Text>
            <Text style={styles.mediaHint}>Tap to watch rally & camp recaps</Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, paddingBottom: 26 },
  hero: {
    backgroundColor: "rgba(255,255,255,0.82)",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(150,100,255,0.2)",
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 14,
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.14,
    shadowRadius: 6,
    elevation: 3,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.86)",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(145,95,255,0.18)",
    padding: 18,
    marginBottom: 12,
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 2,
  },
  title: { fontSize: 22, fontWeight: "900", color: "#4A1F8E", marginBottom: 6 },
  sub: { color: "#6F4AAF", fontSize: 14, fontWeight: "600" },
  line: { fontSize: 14, color: "#6B52A3", marginBottom: 6 },
  mediaRow: { flexDirection: "row", gap: 12, marginTop: 6 },
  mediaBox: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.86)",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(145,95,255,0.18)",
    paddingVertical: 18,
    paddingHorizontal: 14,
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 2,
  },
  mediaTitle: { fontSize: 16, fontWeight: "800", color: "#4A1F8E", marginBottom: 6 },
  mediaHint: { fontSize: 13, color: "#6B52A3" },
  reveal: {
    marginTop: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(145,95,255,0.25)",
  },
  revealText: { color: "#4A1F8E", fontWeight: "700", fontSize: 14 },
});
