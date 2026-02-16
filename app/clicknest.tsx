import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function ClickNest() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#8C4DFF', '#5A1AFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>ClickNest</Text>
        <Text style={styles.sub}>Explore College Life</Text>

        {/* Small list cards */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/clicknest/sports")}
        >
          <Text style={styles.cardText}>🏆 Sports</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/clicknest/department")}
        >
          <Text style={styles.cardText}>🎭 Department Activities</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/clicknest/campus")}
        >
          <Text style={styles.cardText}>🏫 Campus Life</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/clicknest/events")}
        >
          <Text style={styles.cardText}>🎉 Events</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/clicknest/achievements")}
        >
          <Text style={styles.cardText}>🏅 Achievements</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 50, // mella start aagarthuku
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "white",
    textAlign: "center",
    marginBottom: 5,
  },
  sub: {
    textAlign: "center",
    color: "#E0D4FF",
    marginBottom: 25,
    fontSize: 16,
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#F3E8FF",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#5A1AFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 6,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#5A1AFF",
  },
});
