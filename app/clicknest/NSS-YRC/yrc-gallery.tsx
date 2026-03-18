import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

const SCREEN_WIDTH = Dimensions.get("window").width;
const IMAGE_WIDTH = SCREEN_WIDTH - 32;
const IMAGE_HEIGHT = Math.round(IMAGE_WIDTH * 0.62);

export default function YrcGalleryPage() {
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
          <Text style={styles.title}>YRC Eye Camp Gallery</Text>
          <Text style={styles.sub}>Snapshots from eye checkup and blood donation camps.</Text>
        </View>

        <View style={styles.imageCard}>
          <Image source={require("../../../assets/images/blood donation.jpeg")} style={styles.image} />
        </View>
        <View style={styles.imageCard}>
          <Image source={require("../../../assets/images/eyecamp.jpeg")} style={styles.image} />
        </View>
        <View style={styles.imageCard}>
          <Image source={require("../../../assets/images/eyecamp1.jpeg")} style={styles.image} />
        </View>
        <View style={styles.imageCard}>
          <Image source={require("../../../assets/images/eyecamp2.jpeg")} style={styles.image} />
        </View>
        <View style={styles.imageCard}>
          <Image source={require("../../../assets/images/eyecamp3.jpeg")} style={styles.image} />
        </View>
        <View style={styles.imageCard}>
          <Image source={require("../../../assets/images/eyecamp4.jpeg")} style={styles.image} />
        </View>

        <Text style={styles.back} onPress={() => router.back()}>
          ← Back to YRC
        </Text>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 16, paddingBottom: 28, gap: 12 },
  hero: {
    backgroundColor: "rgba(255,255,255,0.86)",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(150,100,255,0.2)",
    paddingVertical: 14,
    paddingHorizontal: 14,
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 2,
  },
  title: { fontSize: 22, fontWeight: "900", color: "#4A1F8E", marginBottom: 4 },
  sub: { fontSize: 14, color: "#6F4AAF", fontWeight: "600" },
  imageCard: {
    backgroundColor: "rgba(255,255,255,0.88)",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(145,95,255,0.18)",
    padding: 6,
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    borderRadius: 12,
    alignSelf: "center",
    backgroundColor: "#EFE7FF",
  },
  back: {
    marginTop: 4,
    color: "#4A1F8E",
    fontWeight: "800",
    textAlign: "center",
  },
});
