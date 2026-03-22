import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

const campusImages = [
  {
    title: "Campus Library View",
    description: "Quiet reading space inside the campus library.",
    source: require("../../assets/images/library1.png"),
  },
  {
    title: "Library Study Area",
    description: "Another library corner that highlights the campus learning environment.",
    source: require("../../assets/images/library2.png"),
  },
];

export default function Gallery() {
  return (
    <LinearGradient
      colors={["#F7F9FF", "#F0E9FF", "#E6DBFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <Text style={styles.title}>Campus Images</Text>
          <Text style={styles.sub}>Library and campus life photos collected inside ClickNest.</Text>
        </View>

        {campusImages.map((item, index) => (
          <View key={item.title} style={styles.card}>
            <Text style={styles.badge}>IMAGE {index + 1}</Text>
            <Image source={item.source} style={styles.image} resizeMode="cover" />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardText}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, paddingBottom: 26 },
  hero: {
    backgroundColor: "rgba(255,255,255,0.86)",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(148,95,255,0.18)",
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 12,
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
    borderColor: "rgba(145,95,255,0.16)",
    padding: 16,
    marginBottom: 12,
    alignItems: "center",
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 2,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#EEE5FF",
    color: "#5C36A8",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    marginBottom: 12,
  },
  image: { width: "100%", height: 220, borderRadius: 12, backgroundColor: "#D9CCFF" },
  cardTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#4A1F8E",
    marginTop: 14,
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: "#6B52A3",
    lineHeight: 20,
  },
});
