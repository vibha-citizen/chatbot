import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

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
    <View style={styles.container}>
      <Text style={styles.title}>🎓 Department Activities</Text>
      <Text style={styles.subtitle}>Click a department to see details</Text>

      <FlatList
        data={departments}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ paddingTop: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.85}
            onPress={() =>
              router.push({
                pathname: item.route as any,
              })
            }
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF5FF", // very light purple
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#6D28D9", // purple heading
    textAlign: "center",
    marginTop: 10,
  },
  subtitle: {
    textAlign: "center",
    color: "#6B7280",
    marginBottom: 20,
    fontSize: 14,
  },
  card: {
    backgroundColor: "#F3E8FF", // soft lavender
    paddingVertical: 18,
    borderRadius: 30, // pill shape
    marginBottom: 14,
    alignItems: "center",

    // shadow (like screenshot)
    shadowColor: "#C084FC",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6D28D9", // purple text
  },
});