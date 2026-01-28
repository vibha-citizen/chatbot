import { Text, StyleSheet, Pressable, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';

export default function HomeScreen() {
  const router = useRouter();
  const glow = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glow, { toValue: 1, duration: 2000, useNativeDriver: false }),
        Animated.timing(glow, { toValue: 0, duration: 2000, useNativeDriver: false }),
      ])
    ).start();
  }, []);

  const shadowOpacity = glow.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.8],
  });

  return (
    <LinearGradient colors={['#090012', '#240046', '#10001F']} style={styles.container}>
      
      <Animated.View style={[styles.glow, { shadowOpacity }]} />

      <BlurView intensity={60} tint="dark" style={styles.card}>
        <Text style={styles.subtitle}>Welcome to</Text>
        <Text style={styles.title}>PKR Arts</Text>

        <Pressable onPress={() => router.push('/(tabs)/chat')}>
          <LinearGradient
            colors={['#C77DFF', '#7B2CBF']}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Start Chat ✨</Text>
          </LinearGradient>
        </Pressable>
      </BlurView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  glow: {
    position: 'absolute',
    width: 260,
    height: 260,
    backgroundColor: '#C77DFF',
    borderRadius: 150,
    shadowColor: '#C77DFF',
    shadowRadius: 60,
  },

  card: {
    width: '85%',
    paddingVertical: 45,
    paddingHorizontal: 30,
    borderRadius: 32,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.06)',
  },

  subtitle: {
    color: '#CDB4FF',
    fontSize: 18,
  },

  title: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 35,
    textShadowColor: '#C77DFF',
    textShadowRadius: 25,
  },

  button: {
    paddingHorizontal: 60,
    paddingVertical: 16,
    borderRadius: 30,
    elevation: 6,
  },

  buttonText: {
    color: '#12001F',
    fontWeight: 'bold',
    fontSize: 16,
  },
});