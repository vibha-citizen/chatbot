import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Enroll() {
  const infoItems = [
    { label: "Eligibility", value: "12th Pass / Equivalent" },
    { label: "Application Fee", value: "INR 500" },
    { label: "Important Dates", value: "Jan 10 - Mar 15" },
    { label: "Documents", value: "Marksheet, ID, Photo" },
  ];

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <LinearGradient
        colors={["#F2E9FF", "#EEE6FF", "#E6DEFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      >
        <View style={styles.orbOne} />
        <View style={styles.orbTwo} />

        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.hero}>
            <Text style={styles.heroTitle}>Admissions</Text>
            <Text style={styles.heroSubtitle}>
              Clear, quick guidance for new applicants.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Details</Text>
            <View style={styles.card}>
              {infoItems.map(item => (
                <View key={item.label} style={styles.row}>
                  <View style={styles.dot} />
                  <View style={styles.rowText}>
                    <Text style={styles.rowLabel}>{item.label}</Text>
                    <Text style={styles.rowValue}>{item.value}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact</Text>
            <View style={styles.cardAlt}>
              <Text style={styles.contactLabel}>Admissions Desk</Text>
              <Text style={styles.contactValue}>admissions@college.com</Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  orbOne: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 999,
    backgroundColor: "#D8C6FF",
    top: -60,
    right: -80,
    opacity: 0.6,
  },
  orbTwo: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 999,
    backgroundColor: "#BFA6FF",
    bottom: 40,
    left: -60,
    opacity: 0.55,
  },
  hero: {
    backgroundColor: "#4B1FA8",
    borderRadius: 24,
    paddingVertical: 22,
    paddingHorizontal: 20,
    marginBottom: 22,
    shadowColor: "#2D0C6F",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  heroTitle: {
    fontSize: 28,
    color: "#F7F2FF",
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  heroSubtitle: {
    marginTop: 6,
    color: "#E6D9FF",
    fontSize: 15,
    lineHeight: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#3A1B7A",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    shadowColor: "#2D0C6F",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  cardAlt: {
    backgroundColor: "#F6F1FF",
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: "#D9CCFF",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 14,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: "#7A3BFF",
    marginTop: 6,
    marginRight: 12,
  },
  rowText: {
    flex: 1,
  },
  rowLabel: {
    fontSize: 14,
    color: "#7B6AAE",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  rowValue: {
    fontSize: 16,
    color: "#2E1768",
    fontWeight: "600",
  },
  contactLabel: {
    fontSize: 14,
    color: "#6E5A9C",
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 16,
    color: "#3B1B7F",
    fontWeight: "700",
  },
});
