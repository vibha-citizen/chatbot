import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

const IMAGE_WIDTH = Dimensions.get("window").width - 80; // padding + card margins

export default function YrcPage() {
  const router = useRouter();
  return (
    <LinearGradient
      colors={["#F9F2FF", "#F0E8FF", "#E6DCFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.title}>Youth Red Cross (YRC)</Text>
          <Text style={styles.sub}>First-aid, safety, and humanitarian initiatives.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.line}>- First-aid training & emergency response workshops</Text>
          <Text style={styles.line}>- Mega blood donation camp & health awareness drives</Text>
          <Text style={styles.line}>- Eye checkup camps with local medical partners</Text>
          <Text style={styles.line}>- Blood grouping drives with student coordinators</Text>
          <Text style={styles.line}>- Gallery, certificates, and volunteer highlights fit here</Text>
        </View>

        <View style={styles.mediaRow}>
          <View style={styles.mediaBox}>
            <Text style={styles.mediaTitle}>Images</Text>
            <Pressable
              style={styles.reveal}
              onPress={() => router.push("/clicknest/NSS-YRC/yrc-gallery")}
            >
              <Text style={styles.revealText}>Tap to open gallery</Text>
            </Pressable>
          </View>
          <View style={styles.mediaBox}>
            <Text style={styles.mediaTitle}>Videos</Text>
            <Text style={styles.mediaHint}>Tap to watch camp recaps</Text>
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
  mediaRow: { flexDirection: "column", gap: 12, marginTop: 6 },
  mediaBox: {
    width: "100%",
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
  imageRow: { paddingRight: 4, gap: 10 },
  reveal: {
    marginTop: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: "#EFE7FF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(145,95,255,0.25)",
  },
  revealText: { color: "#4A1F8E", fontWeight: "700", fontSize: 14 },
});
