import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
const testLogo = require('../../assets/image/logo.png');
console.log('LOGO LOADED OK', testLogo);

export default function HomeScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#120024', '#2B004F', '#3A006F']}
      style={styles.container}
    >
      <StatusBar style="light" />

      {/* LOGO */}
      <Image
        source={require('../assets/image/logo.png')}
        style={styles.logo}
      />
      
      {/* TITLE */}
      <Text style={styles.title}>Welcome to PKR Arts</Text>

      {/* START CHAT BUTTON */}
      <Pressable
        style={styles.button}
        onPress={() => router.push('/(tabs)/chat')}
      >
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
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    color: '#B388FF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#7B2CBF',
    paddingHorizontal: 35,
    paddingVertical: 14,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});