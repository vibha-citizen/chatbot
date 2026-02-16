import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function Chatbot() {
  const router = useRouter();

  const openChat = (topic: string) => {
    router.push({
      pathname: "/chat",
      params: { question: topic }
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      {/* Header with gradient */}
      <LinearGradient
        colors={['#8C4DFF', '#5A1AFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <Text style={styles.headerText}>PKR AI Assistant</Text>
      </LinearGradient>

      {/* Ask Card */}
      <View style={styles.card}>
        <Text style={styles.ask}>Ask anything you want</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.push("/chat")}
        >
          <LinearGradient
            colors={['#7A3BFF', '#5A1AFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.btnGradient}
          >
            <Text style={styles.btnText}>Start Chat</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <Text style={styles.quick}>Quick Actions</Text>
      <View style={styles.grid}>
        <TouchableOpacity
  style={[styles.box, { backgroundColor: '#FDE7FF' }]}
  onPress={() => router.push("/admission")} >
  <Text style={styles.boxText}>Enroll</Text>
</TouchableOpacity>

<TouchableOpacity
  style={[styles.box, { backgroundColor: '#E0F7FF' }]}
  onPress={() => router.push("/clicknest")}  //
>
  <Text style={styles.boxText}>ClickNest</Text>
</TouchableOpacity>


        <TouchableOpacity style={[styles.box, { backgroundColor: '#FFF4E0' }]} onPress={() => openChat("College location")}>
          <Text style={styles.boxText}>PathWay</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={[styles.box, { backgroundColor: '#E8FFEA' }]}
        onPress={() => router.push("/clicknest/sports")}>
          <Text style={styles.boxText}>GameZone</Text>
          </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FF",
    padding: 20,
  },

  // Premium gradient header
  header: {
    paddingVertical: 16,
    borderRadius: 25,
    marginBottom: 25,
    shadowColor: "#7A3BFF",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 10,
  },
  headerText: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "900",
    letterSpacing: 1.2,
  },

  card: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 20,
    shadowColor: "#7A3BFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
  },

  ask: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
    color: "#333",
  },

  btn: {
    borderRadius: 25,
    overflow: "hidden",
  },
  btnGradient: {
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  quick: {
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 22,
    color: "#333",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  box: {
    width: "48%",
    paddingVertical: 25,
    marginTop: 20,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 4,
  },
  boxText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
});