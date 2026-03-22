import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const videoSections = [
  {
    title: "Campus Walkthrough",
    description: "Use this card for a full campus tour video covering blocks, labs, and common areas.",
  },
  {
    title: "Student Life Clips",
    description: "Add day-in-the-life, classroom moments, library clips, and hostel snippets here.",
  },
  {
    title: "Event Highlights",
    description: "Keep culturals, celebrations, and seminar recap videos in this section.",
  },
];

export default function CampusVideos() {
  return (
    <LinearGradient
      colors={["#F8F1FF", "#F0E5FF", "#E8DBFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.title}>Campus Videos</Text>
          <Text style={styles.sub}>Campus reels, walk-throughs, and event clips can be organized here.</Text>
        </View>

        {videoSections.map((section, index) => (
          <View key={section.title} style={styles.videoCard}>
            <Text style={styles.badge}>VIDEO {index + 1}</Text>
            <Text style={styles.videoTitle}>{section.title}</Text>
            <Text style={styles.videoText}>{section.description}</Text>
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>Video preview area</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 28,
  },
  hero: {
    backgroundColor: "rgba(255,255,255,0.84)",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(145,95,255,0.2)",
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.14,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#4A1F8E",
    textAlign: "center",
  },
  sub: {
    textAlign: "center",
    color: "#6F4AAF",
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
  },
  videoCard: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(145,95,255,0.18)",
    padding: 18,
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 14,
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
  videoTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#4A1F8E",
    marginBottom: 8,
  },
  videoText: {
    fontSize: 14,
    color: "#6B52A3",
    lineHeight: 20,
  },
  placeholder: {
    marginTop: 14,
    height: 180,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(145,95,255,0.18)",
    backgroundColor: "#F4EDFF",
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    color: "#7A5BB4",
    fontSize: 15,
    fontWeight: "700",
  },
});
