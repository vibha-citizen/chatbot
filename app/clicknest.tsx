import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function ClickNest() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#F8F1FF", "#F1E7FF", "#EADFFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>ClickNest</Text>
          <Text style={styles.heroSub}>Explore College Life</Text>
        </View>

        <View style={styles.sectionHead}>
          <Text style={styles.sectionHeadText}>Quick Access</Text>
        </View>

        <TouchableOpacity
          style={styles.actionRow}
          onPress={() => router.push("/clicknest/sports")}
          activeOpacity={0.85}
        >
          <View style={[styles.accentBar, { backgroundColor: "#7E3AF2" }]} />
          <Text style={styles.actionText}>🏆 Sports</Text>
          <Text style={styles.arrow}></Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionRow}
          onPress={() => router.push("/clicknest/departments")}
          activeOpacity={0.85}
        >
          <View style={[styles.accentBar, { backgroundColor: "#9F4CFF" }]} />
          <Text style={styles.actionText}>🎭Department Activities</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionRow}
          onPress={() => router.push("/clicknest/campus")}
          activeOpacity={0.85}
        >
          <View style={[styles.accentBar, { backgroundColor: "#7B61FF" }]} />
          <Text style={styles.actionText}>🏫 Campus Life</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionRow}
          onPress={() => router.push("/clicknest/events")}
          activeOpacity={0.85}
        >
          <View style={[styles.accentBar, { backgroundColor: "#A855F7" }]} />
          <Text style={styles.actionText}>🎉 Events</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionRow}
          onPress={() => router.push("/clicknest/achievements")}
          activeOpacity={0.85}
        >
          <View style={[styles.accentBar, { backgroundColor: "#8B5CF6" }]} />
          <Text style={styles.actionText}>🏅 Achievements</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionRow}
          onPress={() => router.push("/clicknest/NSS-YRC")}
          activeOpacity={0.85}
        >
          <View style={[styles.accentBar, { backgroundColor: "#B26BFF" }]} />
          <Text style={styles.actionText}>NSS / YRC</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 28,
    paddingBottom: 30,
  },
  hero: {
    backgroundColor: "rgba(255,255,255,0.74)",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(140,78,255,0.2)",
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: "#4A1F8E",
    textAlign: "center",
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  heroSub: {
    textAlign: "center",
    color: "#6F4AAF",
    marginBottom: 2,
    fontSize: 16,
    fontWeight: "600",
  },
  sectionHead: {
    marginBottom: 10,
    marginTop: 4,
  },
  sectionHeadText: {
    color: "#5E3D95",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  actionRow: {
    backgroundColor: "rgba(255,255,255,0.78)",
    borderRadius: 14,
    marginBottom: 12,
    paddingVertical: 14,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(148,95,255,0.2)",
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.14,
    shadowRadius: 5,
    elevation: 3,
  },
  accentBar: {
    width: 6,
    height: 28,
    borderRadius: 4,
    marginRight: 12,
  },
  actionText: {
    flex: 1,
    fontSize: 17,
    fontWeight: "700",
    color: "#5620A4",
  },
  arrow: {
    color: "#8B5CF6",
    fontSize: 24,
    fontWeight: "700",
    marginLeft: 6,
  },
});
