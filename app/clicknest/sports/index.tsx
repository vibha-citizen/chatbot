import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function SportsIndex() {
  const router = useRouter();

  // Sports list with route names (file names)
  const sports = [
    { name: "Kabaddi", route: "kabaddi" },
    { name: "Volleyball", route: "volleyball" },
    { name: "Hockey", route: "hockey" },
    { name: "Handball", route: "handball" },
    { name: "Football", route: "football" },
    { name: "Badminton", route: "badminton" },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <Text style={styles.title}>🏆 Sports</Text>
      <Text style={styles.subTitle}>Click on a sport to see details</Text>

      {sports.map((sport, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => router.push(`/clicknest/sports/${sport.route}`as any)}
          activeOpacity={0.8}
        >
          <Text style={styles.cardText}>{sport.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FF",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    color: "#5A1AFF",
    marginBottom: 6,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#F3E8FF",
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#5A1AFF",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#5A1AFF",
    textAlign: "center",
  },
});