import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';


export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/chatbot'); // 5 sec after go next page
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
       <Image 
        source={require('../assets/images/logo.png')} 
        style={styles.logo} 
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to PKR</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2A0A4A' },
  logo: { width: 250, height: 250, marginBottom: 20 }, // adjust size and spacing
  title: { color: 'white', fontSize: 30, fontWeight: 'bold' },
});                           