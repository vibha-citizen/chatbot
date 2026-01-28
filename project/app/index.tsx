import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#120024', '#2B004F', '#3A006F']}
      style={styles.container}
    >
      <StatusBar style="light" />

      <Text style={styles.title}>Welcome to PKR Arts</Text>

      {/* ROBOT ANIMATION */}
      <LottieView
        source={require('./assets/robot.json')}
        autoPlay
        loop
        style={styles.robot}
      />

      <View style={styles.chatBubble}>
        <Text style={styles.chatText}>Hi! How can I help you today?</Text>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Start Chat</Text>
      </Pressable>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#B388FF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  robot: {
    width: 260,
    height: 260,
  },
  chatBubble: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 12,
    borderRadius: 16,
    marginTop: 10,
  },
  chatText: {
    color: '#fff',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#7B2CBF',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});