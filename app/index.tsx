import { View, Text, StyleSheet, Image, Animated, Easing, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from 'react';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");
const SNOW_COUNT = 28;

export default function Index() {
  const router = useRouter();
  const snow = useRef(
    Array.from({ length: SNOW_COUNT }, (_, i) => {
      const size = 3 + (i % 5) * 1.8;
      return {
        progress: new Animated.Value(0),
        x: Math.random() * SCREEN_WIDTH,
        size,
        duration: 4800 + Math.random() * 2600,
        delay: Math.random() * 2600,
        drift: (Math.random() - 0.5) * 55,
      };
    })
  ).current;
  const logoFloat = useRef(new Animated.Value(0)).current;
  const titleFade = useRef(new Animated.Value(0.75)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/chatbot'); // 10 sec after go next page
    }, 5000);

    snow.forEach((flake) => {
      Animated.loop(
        Animated.sequence([
          Animated.delay(flake.delay),
          Animated.timing(flake.progress, {
            toValue: 1,
            duration: flake.duration,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(flake.progress, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
        ])
      ).start();
    });

    Animated.loop(
      Animated.sequence([
        Animated.timing(logoFloat, {
          toValue: 1,
          duration: 1800,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(logoFloat, {
          toValue: 0,
          duration: 1800,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(titleFade, {
          toValue: 1,
          duration: 1500,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(titleFade, {
          toValue: 0.76,
          duration: 1500,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    ).start();

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={["#DAB8FF", "#BC91F7", "#8D5DDB"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.lightOne} />
      <View style={styles.lightTwo} />
      <View style={styles.lightThree} />

      {snow.map((flake, index) => (
        <Animated.View
          key={index}
          style={[
            styles.snowflake,
            {
              width: flake.size,
              height: flake.size,
              left: flake.x,
              transform: [
                {
                  translateY: flake.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-30, SCREEN_HEIGHT + 30],
                  }),
                },
                {
                  translateX: flake.progress.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [0, flake.drift, 0],
                  }),
                },
              ],
              opacity: flake.progress.interpolate({
                inputRange: [0, 0.1, 0.9, 1],
                outputRange: [0, 0.95, 0.95, 0],
              }),
              backgroundColor:
                index % 4 === 0
                  ? "rgba(255, 237, 161, 0.98)"
                  : index % 4 === 1
                  ? "rgba(255, 211, 112, 0.95)"
                  : index % 4 === 2
                  ? "rgba(255, 248, 204, 0.95)"
                  : "rgba(255, 255, 255, 0.92)",
            },
          ]}
        />
      ))}

      <View style={styles.centerWrap}>
        <Animated.View
          style={{
            transform: [
              {
                translateY: logoFloat.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -8],
                }),
              },
            ],
          }}
        >
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </Animated.View>

        <Animated.Text style={[styles.title, { opacity: titleFade }]}>
          Welcome to PKR
        </Animated.Text>
        <Text style={styles.subtitle}>Smart Campus Assistant</Text>
      </View>
      <Animated.View style={[styles.bottomHint, { opacity: titleFade }]}>
        <Text style={styles.hintText}>Preparing your assistant...</Text>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDA8F1',
  },
  lightOne: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "rgba(228,198,255,0.42)",
    top: -80,
    right: -60,
  },
  lightTwo: {
    position: "absolute",
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: "rgba(122,76,211,0.34)",
    bottom: 90,
    left: -80,
  },
  lightThree: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "rgba(255,215,143,0.26)",
    top: 160,
    right: 34,
  },
  snowflake: {
    position: "absolute",
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.95)",
  },
  centerWrap: {
    width: "86%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 26,
    paddingHorizontal: 14,
  },
  logo: { width: 224, height: 224, marginBottom: 16 },
  title: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: 0.7,
    textShadowColor: "rgba(77, 20, 148, 0.65)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  subtitle: {
    color: "rgba(255,241,255,0.92)",
    marginTop: 6,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  bottomHint: {
    position: "absolute",
    bottom: 42,
    backgroundColor: "rgba(255,255,255,0.22)",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.38)",
  },
  hintText: {
    color: "#FDF3FF",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
});
