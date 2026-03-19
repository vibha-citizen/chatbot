import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Departments() {
  const router = useRouter();

  const departments = [
    { name: "Department of Tamil", route: "/clicknest/departments/tamil" },
    { name: "Department of English", route: "/clicknest/departments/english" },
    { name: "Department of Maths", route: "/clicknest/departments/maths" },
    { name: "Department of Physics", route: "/clicknest/departments/physics" },
    { name: "Department of CS", route: "/clicknest/departments/cs" },
    { name: "Department of Commerce", route: "/clicknest/departments/commerce" },
    { name: "Placement", route: "/clicknest/departments/placement" },
  ];

  return (
    <LinearGradient colors={["#FAF3FF", "#F2E8FF", "#E8DCFF"]} style={styles.container}>
      <Text style={styles.title}>Department Activities</Text>
      <Text style={styles.subtitle}>Choose a department</Text>

      <FlatList
        data={departments}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ paddingTop: 12, paddingBottom: 20 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[styles.card, index % 2 === 0 ? styles.cardEven : styles.cardOdd]}
            activeOpacity={0.86}
            onPress={() => router.push({ pathname: item.route as any })}
          >
          </TouchableOpacity>
        )}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#4D1F9A",
    textAlign: "center",
    marginTop: 8,
  },
  subtitle: {
    textAlign: "center",
    color: "#6B56A0",
    marginBottom: 10,
    marginTop: 4,
    fontSize: 14,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.78)",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(148,95,255,0.2)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  cardEven: { marginRight: 6 },
  cardOdd: { marginLeft: 6 },
  text: { fontSize: 16, fontWeight: "700", color: "#5A24AE" },
  chev: { fontSize: 24, color: "#8B5CF6", fontWeight: "700" },
});
