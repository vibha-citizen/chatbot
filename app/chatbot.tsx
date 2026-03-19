import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function Chatbot() {
  const router = useRouter();

  const openChat = (topic: string, openMap?: boolean) => {
    router.push({
      pathname: "/chat",
      params: {
        question: topic,
        ...(openMap ? { openMap: "1" } : {}),
      },
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <LinearGradient
        colors={['#F7F1FF', '#F2E8FF', '#EAD9FF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.pageGlow}
      />
      <View style={styles.auroraOne} />
      <View style={styles.auroraTwo} />
      <View style={styles.auroraThree} />

      {/* Header with gradient */}
      <LinearGradient
        colors={['#8A3CFF', '#6C2DFF', '#4C1FA1']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.headerEyebrow}>PKR • AI Concierge</Text>
        <Text style={styles.headerText}>PKR AI Assistant</Text>
        <Text style={styles.headerSub}>Ask. Explore. Get instant answers.</Text>
      </LinearGradient>

      {/* Ask Card */}
      <LinearGradient
        colors={['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.8)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <Text style={styles.ask}>Ask anything you want</Text>

        <View style={styles.promptRow}>
          <TouchableOpacity style={styles.promptChip} onPress={() => openChat("What courses do you offer?")}>
            <Text style={styles.promptText}>Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.promptChip} onPress={() => openChat("Tell me about placements")}>
            <Text style={styles.promptText}>Placements</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.promptChip} onPress={() => openChat("Hostel facilities and fees?")}>
            <Text style={styles.promptText}>Hostel</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.push("/chat")}
        >
          <LinearGradient
            colors={['#8D3BFF', '#5E2CFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.btnGradient}
          >
            <Text style={styles.btnText}>Start Chat</Text>
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>

      {/* Quick Actions */}
      <Text style={styles.quick}>Quick Actions</Text>
      <View style={styles.grid}>
        <TouchableOpacity onPress={() => router.push("/chat")} style={styles.boxWrapper}>
          <LinearGradient colors={['#F9E7FF', '#F3D9FF']} style={styles.box}>
            <Text style={styles.boxLabel}>Enroll</Text>
            <Text style={styles.boxText}>Admissions chat</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/clicknest")} style={styles.boxWrapper}>
          <LinearGradient colors={['#E5EDFF', '#D7E4FF']} style={styles.box}>
            <Text style={styles.boxLabel}>ClickNest</Text>
            <Text style={styles.boxText}>Campus hub</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openChat("College location", true)} style={styles.boxWrapper}>
          <LinearGradient colors={['#FFF0E6', '#FFE1CC']} style={styles.box}>
            <Text style={styles.boxLabel}>PathWay</Text>
            <Text style={styles.boxText}>Navigate easily</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/clicknest/sports")} style={styles.boxWrapper}>
          <LinearGradient colors={['#E9FFF3', '#D6FFE9']} style={styles.box}>
            <Text style={styles.boxLabel}>GameZone</Text>
            <Text style={styles.boxText}>Sports & scores</Text>
          </LinearGradient>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F2FF",
    paddingHorizontal: 20,
  },
  content: { paddingBottom: 32, paddingTop: 12 },
  pageGlow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  auroraOne: {
    position: "absolute",
    top: -120,
    right: -80,
    width: 260,
    height: 260,
    borderRadius: 260,
    backgroundColor: "rgba(111,75,255,0.22)",
    transform: [{ rotate: "15deg" }],
  },
  auroraTwo: {
    position: "absolute",
    bottom: 180,
    left: -90,
    width: 240,
    height: 240,
    borderRadius: 240,
    backgroundColor: "rgba(78,140,255,0.18)",
    transform: [{ rotate: "-8deg" }],
  },
  auroraThree: {
    position: "absolute",
    bottom: -60,
    right: -70,
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: "rgba(92,236,255,0.16)",
    transform: [{ rotate: "22deg" }],
  },

  // Premium gradient header
  header: {
    paddingVertical: 20,
    paddingHorizontal: 18,
    borderRadius: 28,
    marginBottom: 22,
    shadowColor: "#5B3DFF",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 12,
  },
  headerEyebrow: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 12,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  headerText: {
    color: "white",
    textAlign: "left",
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: 0.5,
  },
  headerSub: {
    color: "rgba(255,255,255,0.92)",
    marginTop: 6,
    fontSize: 15,
    fontWeight: "600",
  },

  card: {
    padding: 26,
    borderRadius: 22,
    shadowColor: "#5B3DFF",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 14,
    elevation: 8,
    borderWidth: 1,
    borderColor: "rgba(111,75,255,0.16)",
  },

  ask: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
    color: "#2A1B5C",
  },
  promptRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 18,
  },
  promptChip: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 14,
    backgroundColor: "rgba(111,75,255,0.08)",
    borderWidth: 1,
    borderColor: "rgba(111,75,255,0.22)",
  },
  promptText: {
    color: "#2A1B5C",
    fontWeight: "700",
    fontSize: 13,
    letterSpacing: 0.2,
  },

  btn: {
    borderRadius: 25,
    overflow: "hidden",
  },
  btnGradient: {
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 0.3,
  },

  quick: {
    marginTop: 28,
    fontWeight: "900",
    fontSize: 22,
    color: "#241445",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 8,
  },

  boxWrapper: { width: "48%", marginTop: 18 },
  box: {
    borderRadius: 18,
    paddingVertical: 20,
    paddingHorizontal: 14,
    shadowColor: "#3B2D60",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 6,
  },
  boxLabel: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1E0F3D",
    marginBottom: 4,
  },
  boxText: {
    fontSize: 13,
    fontWeight: "600",
    color: "rgba(30,15,61,0.7)",
  },
});
