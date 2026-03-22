import { useLocalSearchParams, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

const imageMap: Record<string, { src: any; title: string }> = {
  library11: { src: require("../../assets/images/library11.jpeg"), title: "Library Photo 1" },
  library12: { src: require("../../assets/images/library12.jpeg"), title: "Library Photo 2" },
};

export default function CampusFull() {
  const router = useRouter();
  const { img } = useLocalSearchParams<{ img?: string }>();

  const chosen = (img && imageMap[img]) || imageMap.library11;

  return (
    <LinearGradient colors={["#F4EDFF", "#ECE0FF", "#E5D6FF"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} maximumZoomScale={3} minimumZoomScale={1}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn} activeOpacity={0.8}>
          <Text style={styles.backText}>? Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{chosen.title}</Text>

        <Image source={chosen.src} style={styles.image} resizeMode="contain" />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    padding: 18,
    alignItems: "center",
  },
  backBtn: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "rgba(74,31,142,0.1)",
    borderWidth: 1,
    borderColor: "rgba(74,31,142,0.2)",
    marginBottom: 10,
  },
  backText: { color: "#4A1F8E", fontWeight: "800" },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: "#4A1F8E",
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 520,
    borderRadius: 18,
    backgroundColor: "#EDE4FF",
  },
});
