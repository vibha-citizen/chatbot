import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function HockeyImages() {
  const images = [
    require("../../../../assets/images/hockey.png"),
    require("../../../../assets/images/hockey1.png"),
    require("../../../../assets/images/hockey2.png"),
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🏆 Hockey Images</Text>

      {images.map((img, index) => (
        <Image
          key={index}
          source={img}
          style={styles.image}
          resizeMode="cover"
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F5FF",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#5A1AFF",
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 16,
    marginBottom: 16,
  },
});