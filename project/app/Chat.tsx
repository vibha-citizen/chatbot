import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useState, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const flatListRef = useRef<FlatList>(null);

  // Send user message
  const sendMessage = () => {
    if (message.trim() === '') return;

    const newMsg = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      time: new Date().toLocaleTimeString().slice(0, 5), // hh:mm
    };

    setMessages((prev) => [...prev, newMsg]);
    setMessage('');

    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);

    // Auto bot reply after 1 second
    setTimeout(() => {
      const botMsg = {
        id: (Date.now() + 1).toString(),
        text: "Hey! I received your message.",
        sender: 'bot',
        time: new Date().toLocaleTimeString().slice(0, 5),
      };
      setMessages((prev) => [...prev, botMsg]);
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 1000);
  };

  const renderItem = ({ item }: { item: any }) => {
    const isUser = item.sender === 'user';
    return (
      <View
        style={[
          styles.messageBubble,
          isUser ? styles.userBubble : styles.botBubble,
        ]}
      >
        <Text style={styles.msgText}>{item.text}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    );
  };

  return (
    <LinearGradient colors={['#0f001a', '#2a0044']} style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* CHAT AREA */}
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 16, paddingBottom: 70 }}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />

        {/* INPUT BAR */}
        <View style={styles.inputBar}>
          <TextInput
            placeholder="Type your message..."
            placeholderTextColor="#aaa"
            value={message}
            onChangeText={setMessage}
            style={styles.input}
          />
          <Pressable onPress={sendMessage} style={styles.sendBtn}>
            <Text style={styles.sendText}>Send</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  messageBubble: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 18,
    marginVertical: 6,
    maxWidth: '75%',
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#a855f7',
  },
  botBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#4b5563',
  },
  msgText: {
    color: '#fff',
    fontSize: 15,
  },
  timeText: {
    color: '#ddd',
    fontSize: 10,
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  inputBar: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#1a002b',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  input: {
    flex: 1,
    backgroundColor: '#2a0044',
    color: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 10,
  },
  sendBtn: {
    backgroundColor: '#8b5cf6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  sendText: {
    color: '#fff',
    fontWeight: '600',
  },
});