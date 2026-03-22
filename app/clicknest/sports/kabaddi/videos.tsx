import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ResizeMode, Video } from "expo-av";
import { useRef, useState } from "react";

const videos = [
  { label: "Kabaddi Video 1", source: require("../../../../assets/videos/kabaddi1.mp4") },
  { label: "Kabaddi Video 2", source: require("../../../../assets/videos/kabaddi2.mp4") },
  { label: "Kabaddi Video 3", source: require("../../../../assets/videos/kabaddi3.mp4") },
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
<<<<<<< HEAD
      <View style={styles.header}>
        <Text style={styles.title}>Kabaddi Videos</Text>
        <Text style={styles.sub}>Training and match highlights</Text>
      </View>

      <Video
        source={require("../../../../assets/videos/kabaddi02.mp4")}
        style={styles.video}
        useNativeControls
        shouldPlay
        isLooping
        resizeMode={ResizeMode.CONTAIN}
      />
=======
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.title}>Kabaddi Videos</Text>
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
          <Text style={styles.sub}>Training and match highlights</Text>
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
>>>>>>> d0772b9fc058d629103f2901a3bdb66537f2dec0
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: { flex: 1, padding: 16 },
  header: {
=======
  container: { flex: 1 },
  scroll: { padding: 18, paddingBottom: 28 },
  card: {
>>>>>>> d0772b9fc058d629103f2901a3bdb66537f2dec0
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(145,95,255,0.2)",
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 14,
  },
  title: { fontSize: 24, fontWeight: "900", color: "#4D1F9A", textAlign: "center" },
  videoRow: {
    width: "100%",
<<<<<<< HEAD
    flex: 1,
    minHeight: 420,
    borderRadius: 18,
    backgroundColor: "#120B22",
=======
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
>>>>>>> d0772b9fc058d629103f2901a3bdb66537f2dec0
  },
});
