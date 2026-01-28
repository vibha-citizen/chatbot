import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Chat() {
  return (
    <View style={styles.container}>

      <View style={styles.chatBubble}>
        <Text style={styles.chatText}>
          Hi 👋 How can I help you today?
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type your message..."
          placeholderTextColor="#D1B3FF"
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendBtn}>
          <Text style={styles.sendText}>➤</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A0A4A',
    padding: 16,
  },
  chatBubble: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 14,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 40,
  },
  chatText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3D1366',
    borderRadius: 30,
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    paddingVertical: 12,
  },
  sendBtn: {
    backgroundColor: '#B266FF',
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendText: {
    color: '#1E0033',
    fontSize: 18,
    fontWeight: 'bold',
  },
});