import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const companies = [
  {
    name: "PPTS",
    images: [
      require("../../../assets/images/ppts1.jpeg"),
      require("../../../assets/images/ppts2.jpeg"),
      require("../../../assets/images/ppts3.jpeg"),
      require("../../../assets/images/ppts4.jpeg"),
    ],
  },
  {
    name: "KGiSL",
    images: [
      require("../../../assets/images/kgisl1.jpeg"),
      require("../../../assets/images/kgisl2.jpeg"),
      require("../../../assets/images/kgisl3.jpeg"),
    ],
  },
  {
    name: "Bluez Information Solutions",
    images: [
      require("../../../assets/images/bluez1.jpeg"),
      require("../../../assets/images/bluez2.jpeg"),
    ],
  },
  {
    name: "Lesuccess",
    images: [
      require("../../../assets/images/lesuccess1.jpeg"),
    ],
  },
];

export default function Screen() {
  return (
    <LinearGradient colors={["#F8F1FF", "#EFE5FF", "#E6DAFF"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.title}>Department of Placement</Text>
          <Text style={styles.sub}>Company Gallery</Text>
        </View>

        {companies.map(company => (
          <View key={company.name} style={styles.section}>
            <View style={styles.companyCard}>
              <Text style={styles.companyTitle}>{company.name}</Text>
            </View>
            <View style={styles.grid}>
              {company.images.map((img, index) => (
                <View key={`${company.name}-${index}`} style={styles.card}>
                  <Image source={img} style={styles.image} resizeMode="cover" />
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 16, paddingBottom: 28 },
  hero: {
    backgroundColor: "rgba(255,255,255,0.82)",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(148,95,255,0.25)",
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    color: "#2f1261",
    textAlign: "center",
  },
  sub: {
    fontSize: 14,
    color: "#6F5AA4",
    textAlign: "center",
    marginTop: 6,
    fontWeight: "700",
  },
  section: {
    marginBottom: 18,
  },
  companyCard: {
    backgroundColor: "#6036a9",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#832af9",
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
    shadowColor: "#492d76",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 5,
    elevation: 3,
  },
  companyTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#F3EDFF",
    textAlign: "center",
    letterSpacing: 0.4,
  },
  grid: {
    flexDirection: "column",
  },
  card: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.82)",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(148,95,255,0.18)",
    padding: 8,
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 12,
  },
});
