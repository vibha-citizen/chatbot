import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

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
          <Text style={styles.title}>Gallery</Text>
          <Text style={styles.sub}>Add event photos, carousels, and campus moments here.</Text>
        </View>

        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Image slots go here</Text>
          <Image
            source={{ uri: "https://via.placeholder.com/320x180.png?text=Gallery+Item" }}
            style={styles.image}
          />
        </View>
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
  placeholder: {
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
  placeholderText: { fontSize: 14, color: "#6B52A3", marginBottom: 10 },
  image: { width: "100%", height: 180, borderRadius: 12, backgroundColor: "#D9CCFF" },
});
