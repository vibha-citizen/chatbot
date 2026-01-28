import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useState } from 'react';

export default function ChatScreen() {
  const [message, setMessage] = useState('');

  return (
    <LinearGradient colors={['#090012', '#1B0033']} style={{ flex: 1 }}>
      
      {/* HEADER */}
      <BlurView intensity={50} tint="dark" style={styles.header}>
        <Text style={styles.headerText}>PKR Arts Assistant 🤖</Text>
      </BlurView>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView style={styles.messages} showsVerticalScrollIndicator={false}>
          <View style={styles.botBubble}>
            <Text style={styles.botText}>
              Hi! How can I help you today?
            </Text>
          </View>
        </ScrollView>

        {/* INPUT */}
        <View style={styles.inputBar}>
          <TextInput
            placeholder="Type your message..."
            placeholderTextColor="#AAA"
            style={styles.input}
            value={message}
            onChangeText={setMessage}
          />
          <Pressable style={styles.send}>
            <Text style={styles.sendText}>➤</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 55,
    paddingBottom: 18,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },

  headerText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  messages: {
    flex: 1,
    padding: 20,
  },

  botBubble: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(199,125,255,0.25)',
    padding: 16,
    borderRadius: 20,
    maxWidth: '80%',
    marginBottom: 12,
  },

  botText: {
    color: '#FFF',
    fontSize: 15,
  },

  inputBar: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: 'rgba(20,0,40,0.95)',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  input: {
    flex: 1,
    backgroundColor: '#2B0057',
    borderRadius: 25,
    paddingHorizontal: 18,
    color: '#FFF',
  },

  send: {
    marginLeft: 10,
    backgroundColor: '#C77DFF',
    borderRadius: 25,
    paddingHorizontal: 22,
    justifyContent: 'center',
  },

  sendText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#12001F',
  },
});