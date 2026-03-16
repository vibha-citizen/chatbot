import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function SportsIndex() {
  const router = useRouter();

  const sports = [
    { name: "Kabaddi", route: "kabaddi", tone: "#7C3AED" },
    { name: "Volleyball", route: "volleyball", tone: "#8B5CF6" },
    { name: "Hockey", route: "hockey", tone: "#6D28D9" },
    { name: "Handball", route: "handball", tone: "#9333EA" },
    { name: "Football", route: "football", tone: "#7E22CE" },
    { name: "Badminton", route: "badminton", tone: "#A855F7" },
  ];

  return (
    <LinearGradient
      colors={["#FBF4FF", "#F1E7FF", "#E9DDFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.bgShapeOne} />
      <View style={styles.bgShapeTwo} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.badgeWrap}>
          <Text style={styles.badgeText}>SPORTS HUB</Text>
        </View>

        <Text style={styles.title}>Choose a Sport</Text>
        <Text style={styles.subTitle}>Tap any tile to open its images and videos</Text>

        <View style={styles.grid}>
          {sports.map((sport, index) => (
            <TouchableOpacity
              key={sport.route}
              style={[styles.tile, index % 2 === 0 ? styles.tileLift : styles.tileDrop]}
              onPress={() => router.push(`/clicknest/sports/${sport.route}` as any)}
              activeOpacity={0.86}
            >
              <View style={[styles.tileDot, { backgroundColor: sport.tone }]} />
              <Text style={styles.tileTitle}>{sport.name}</Text>
              <Text style={styles.tileHint}>Open</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgShapeOne: {
    position: "absolute",
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: "rgba(166,94,255,0.18)",
    top: -80,
    right: -80,
  },
  bgShapeTwo: {
    position: "absolute",
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: "rgba(129,88,255,0.15)",
    bottom: 90,
    left: -70,
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 28,
  },
  badgeWrap: {
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,0.72)",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(141,85,255,0.28)",
    marginBottom: 12,
  },
  badgeText: {
    color: "#5A2AA7",
    fontWeight: "800",
    fontSize: 12,
    letterSpacing: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    color: "#4B1F93",
    textAlign: "center",
    letterSpacing: 0.4,
  },
  subTitle: {
    fontSize: 14,
    color: "#6B56A1",
    textAlign: "center",
    marginTop: 6,
    marginBottom: 16,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  tile: {
    width: "48.3%",
    minHeight: 120,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.78)",
    borderWidth: 1,
    borderColor: "rgba(146,95,255,0.22)",
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 12,
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 3,
  },
  tileLift: {
    marginTop: 0,
  },
  tileDrop: {
    marginTop: 8,
  },
  tileDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginBottom: 12,
  },
  tileTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#51249F",
  },
  tileHint: {
    marginTop: 14,
    fontSize: 13,
    color: "#7E63B5",
    fontWeight: "600",
  },
});
