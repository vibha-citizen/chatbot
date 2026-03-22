<<<<<<< HEAD
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
=======
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from "react-native";
>>>>>>> d0772b9fc058d629103f2901a3bdb66537f2dec0
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useRouter } from "expo-router";

const campusSections = [
  {
    label: "IMAGES",
    title: "Campus Images",
    description: "Browse library spaces and campus corners through curated photo cards.",
    route: "/clicknest/gallery" as const,
    tint: "#FFE9F5",
    count: "2 photos",
  },
  {
    label: "VIDEOS",
    title: "Campus Videos",
    description: "Short recaps, walkthroughs, and daily life moments in one place.",
    route: "/clicknest/campus-videos" as const,
    tint: "#F2E8FF",
    count: "3 video sections",
  },
];

export default function Campus() {
  const router = useRouter();
<<<<<<< HEAD

  return (
    <LinearGradient
      colors={["#F8F1FF", "#F0E5FF", "#E8DBFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.glowOne} />
      <View style={styles.glowTwo} />

      <View style={styles.hero}>
        <Text style={styles.title}>Campus Life</Text>
        <Text style={styles.sub}>Open campus memories through images and videos.</Text>
      </View>

      <View style={styles.quickRow}>
        <View style={styles.quickChip}>
          <Text style={styles.quickLabel}>Images</Text>
          <Text style={styles.quickValue}>2</Text>
        </View>
        <View style={styles.quickChip}>
          <Text style={styles.quickLabel}>Videos</Text>
          <Text style={styles.quickValue}>3</Text>
        </View>
      </View>

      {campusSections.map((section) => (
        <TouchableOpacity
          key={section.title}
          style={styles.card}
          activeOpacity={0.88}
          onPress={() => router.push(section.route)}
        >
          <View style={styles.cardTop}>
            <View style={[styles.badge, { backgroundColor: section.tint }]}>
              <Text style={styles.badgeText}>{section.label}</Text>
            </View>
            <Text style={styles.countText}>{section.count}</Text>
          </View>
          <Text style={styles.cardTitle}>{section.title}</Text>
          <Text style={styles.cardText}>{section.description}</Text>
          <Text style={styles.openText}>Open</Text>
        </TouchableOpacity>
      ))}
=======
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
>>>>>>> d0772b9fc058d629103f2901a3bdb66537f2dec0
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  glowOne: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "rgba(140,88,255,0.18)",
    top: -70,
    right: -70,
  },
  glowTwo: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "rgba(168,112,255,0.15)",
    bottom: 90,
    left: -60,
  },
  hero: {
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 20,
=======
  container: { flex: 1 },
  content: { padding: 20, paddingBottom: 26 },
  card: {
    backgroundColor: "rgba(255,255,255,0.78)",
    borderRadius: 18,
>>>>>>> d0772b9fc058d629103f2901a3bdb66537f2dec0
    borderWidth: 1,
    borderColor: "rgba(145,95,255,0.2)",
    paddingVertical: 22,
    paddingHorizontal: 18,
    marginBottom: 20,
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.14,
    shadowRadius: 6,
    elevation: 3,
  },
<<<<<<< HEAD
  quickRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  quickChip: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.72)",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(145,95,255,0.18)",
    paddingVertical: 14,
    paddingHorizontal: 14,
  },
  quickLabel: {
    color: "#6B52A3",
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  quickValue: {
    color: "#4A1F8E",
    fontSize: 24,
    fontWeight: "900",
    marginTop: 6,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.86)",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(145,95,255,0.18)",
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 14,
=======
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
>>>>>>> d0772b9fc058d629103f2901a3bdb66537f2dec0
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
<<<<<<< HEAD
    elevation: 2,
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    marginBottom: 10,
  },
  countText: {
    color: "#7A5BB4",
    fontSize: 12,
    fontWeight: "700",
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#5C36A8",
    letterSpacing: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    color: "#4A1F8E",
    textAlign: "center",
  },
  sub: {
    fontSize: 15,
    fontWeight: "600",
    color: "#6B52A3",
    textAlign: "center",
    marginTop: 8,
  },
  cardTitle: {
    fontSize: 21,
    fontWeight: "800",
    color: "#4A1F8E",
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: "#6B52A3",
    lineHeight: 20,
  },
  openText: {
    marginTop: 12,
    color: "#5C36A8",
    fontSize: 14,
    fontWeight: "800",
  },
=======
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
>>>>>>> d0772b9fc058d629103f2901a3bdb66537f2dec0
});
