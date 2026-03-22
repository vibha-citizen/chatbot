import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ResizeMode, Video } from "expo-av";

export default function VideosScreen() {
  return (
    <LinearGradient colors={["#F9F2FF", "#F0E6FF", "#E7DBFF"]} style={styles.container}>
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
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: {
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
  video: {
    width: "100%",
    flex: 1,
    minHeight: 420,
    borderRadius: 18,
    backgroundColor: "#120B22",
  },
  sub: { fontSize: 14, color: "#6F5AA4", textAlign: "center", marginTop: 8 },
});
