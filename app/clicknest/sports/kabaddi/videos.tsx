import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ResizeMode, Video } from "expo-av";

export default function VideosScreen() {
  return (
    <LinearGradient colors={["#F9F2FF", "#F0E6FF", "#E7DBFF"]} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Kabaddi Videos</Text>
        <Video
          source={require("../../../../assets/videos/kabaddi.mp4")}
          style={styles.video}
          useNativeControls
          shouldPlay
          isLooping
          resizeMode={ResizeMode.CONTAIN}
        />
        <Text style={styles.sub}>Training and match highlights</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 18 },
  card: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(145,95,255,0.2)",
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: "900", color: "#4D1F9A", textAlign: "center" },
  video: {
    width: "100%",
    height: 240,
    borderRadius: 14,
    backgroundColor: "#120B22",
    marginTop: 14,
  },
  sub: { fontSize: 14, color: "#6F5AA4", textAlign: "center", marginTop: 8 },
});
