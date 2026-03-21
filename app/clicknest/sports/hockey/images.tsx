import { Text, StyleSheet, ScrollView, Image, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ScreenImages() {
  const images = [
    require("../../../../assets/images/hockey.png"),
    require("../../../../assets/images/hockey1.png"),
  ];

  return (
    <LinearGradient colors={["#FBF5FF", "#F2E9FF", "#EADDFF"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Hockey Images</Text>

        {images.map((img, index) => (
          <View key={index} style={styles.imageCard}>
            <ImageBackground
              source={img}
              style={styles.imageBg}
              imageStyle={styles.imageBgInner}
              blurRadius={12}
            >
              <Image source={img} style={styles.imageFull} resizeMode="contain" />
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 16, paddingBottom: 24 },
  title: {
    fontSize: 26,
    fontWeight: "900",
    color: "#4D1F9A",
    textAlign: "center",
    marginBottom: 16,
  },
  imageCard: {
    backgroundColor: "rgba(255,255,255,0.82)",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(145,95,255,0.2)",
    padding: 8,
    marginBottom: 12,
  },
  imageBg: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  imageBgInner: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  imageFull: {
    width: "94%",
    height: "94%",
  },
});
