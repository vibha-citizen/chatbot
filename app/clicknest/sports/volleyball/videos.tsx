import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ResizeMode, Video } from "expo-av";
import { useRef, useState } from "react";

const videos = [
  { label: "Volleyball Video 1", source: require("../../../../assets/videos/volleyball1.mp4") },
];

export default function VideosScreen() {
  const videoRef = useRef<Video | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openFullscreen = (index: number) => {
    setActiveIndex(index);
  };

  const closeFullscreen = async () => {
    try {
      await videoRef.current?.stopAsync();
    } catch {
      // Ignore stop errors
    }
    setActiveIndex(null);
  };

  return (
    <LinearGradient colors={["#F9F2FF", "#F0E6FF", "#E7DBFF"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.title}>Volleyball Videos</Text>
          {videos.map((video, index) => (
            <TouchableOpacity
              key={video.label}
              activeOpacity={0.85}
              style={styles.videoRow}
              onPress={() => openFullscreen(index)}
            >
              <Text style={styles.videoLabel}>{video.label}</Text>
              <Text style={styles.videoCta}>Tap to play</Text>
            </TouchableOpacity>
          ))}
          <Text style={styles.sub}>Practice and match highlights</Text>
        </View>
      </ScrollView>

      <Modal
        visible={activeIndex !== null}
        transparent={false}
        animationType="slide"
        onRequestClose={closeFullscreen}
      >
        <View style={styles.modalWrap}>
          <TouchableOpacity style={styles.closeBtn} onPress={closeFullscreen}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
          {activeIndex !== null && (
            <Video
              ref={videoRef}
              source={videos[activeIndex].source}
              style={styles.fullVideo}
              resizeMode={ResizeMode.CONTAIN}
              useNativeControls
              shouldPlay
              isLooping
            />
          )}
        </View>
      </Modal>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 18, paddingBottom: 28 },
  card: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(145,95,255,0.2)",
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: "900", color: "#4D1F9A", textAlign: "center" },
  videoRow: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.92)",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(148,95,255,0.18)",
    paddingVertical: 12,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
  },
  videoLabel: {
    fontSize: 15,
    fontWeight: "700",
    color: "#5A24AE",
  },
  videoCta: {
    color: "#6F5AA4",
    fontSize: 12,
    fontWeight: "700",
  },
  sub: { fontSize: 14, color: "#6F5AA4", textAlign: "center", marginTop: 12 },
  modalWrap: {
    flex: 1,
    backgroundColor: "#0C0A14",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  fullVideo: {
    width: "100%",
    height: "70%",
    backgroundColor: "#0C0A14",
  },
  closeBtn: {
    position: "absolute",
    top: 40,
    right: 16,
    backgroundColor: "rgba(255,255,255,0.18)",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
  },
  closeText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
