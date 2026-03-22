import { View, Text, StyleSheet, ScrollView, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Campus() {
  const router = useRouter();
  const [showImages, setShowImages] = useState(false);
  const libraryImages = [
    { key: "library11", src: require("../../assets/images/library11.jpeg"), label: "Library 1" },
    { key: "library12", src: require("../../assets/images/library12.jpeg"), label: "Library 2" },
  ];

  const openFull = (key: string) => {
    router.push({ pathname: "/clicknest/campus-full", params: { img: key } });
  };

  return (
    <LinearGradient colors={["#F8F1FF", "#F0E5FF", "#E8DBFF"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.title}>Campus Life</Text>
          <Text style={styles.sub}>Library highlights and media hub.</Text>
          <Text style={styles.note}>Browse photos now; videos coming soon.</Text>
        </View>

        <View style={styles.mediaRow}>
          <View style={[styles.mediaBox, { marginRight: 10 }]}>
            <Text style={styles.mediaTitle}>Images</Text>
            {showImages ? (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.imageRow}
              >
                {libraryImages.map(img => (
                  <Pressable key={img.key} onPress={() => openFull(img.key)} style={styles.imageWrap}>
                    <Image source={img.src} style={styles.image} />
                    <Text style={styles.imageLabel}>{img.label}</Text>
                  </Pressable>
                ))}
              </ScrollView>
            ) : (
              <Pressable style={styles.reveal} onPress={() => setShowImages(true)}>
                <Text style={styles.revealText}>Tap to view library photos</Text>
              </Pressable>
            )}
          </View>

          <View style={styles.mediaBox}>
            <Text style={styles.mediaTitle}>Videos</Text>
            <Text style={styles.mediaHint}>Campus tour videos will appear here soon.</Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, paddingBottom: 26 },
  card: {
    backgroundColor: "rgba(255,255,255,0.78)",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(145,95,255,0.22)",
    padding: 22,
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 3,
  },
  title: { fontSize: 28, fontWeight: "900", color: "#4A1F8E", textAlign: "center" },
  sub: { fontSize: 16, fontWeight: "700", color: "#6B52A3", textAlign: "center", marginTop: 8 },
  note: { fontSize: 14, color: "#7A67A8", textAlign: "center", marginTop: 10 },
  mediaRow: { flexDirection: "row", marginTop: 12 },
  mediaBox: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.82)",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(145,95,255,0.22)",
    padding: 14,
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 3,
  },
  mediaTitle: { fontSize: 16, fontWeight: "800", color: "#4A1F8E", marginBottom: 8 },
  mediaHint: { fontSize: 13, color: "#6B52A3" },
  imageRow: { gap: 10 },
  imageWrap: { marginRight: 10, alignItems: "center" },
  image: {
    width: 150,
    height: 110,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: "#EFE7FF",
  },
  imageLabel: {
    marginTop: 6,
    color: "#4A1F8E",
    fontWeight: "700",
    fontSize: 12,
  },
  reveal: {
    marginTop: 6,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(145,95,255,0.3)",
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  revealText: { color: "#4A1F8E", fontWeight: "700" },
});
