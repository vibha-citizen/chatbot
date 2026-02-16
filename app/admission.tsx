import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";

export default function Enroll() {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if(message.trim() !== ""){
      alert("You typed: " + message);
      setMessage(""); // clear input
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.header}>Admissions Details</Text>
        <Text style={styles.text}>1. Eligibility: 12th Pass / Equivalent</Text>
        <Text style={styles.text}>2. Application Fee: ₹500</Text>
        <Text style={styles.text}>3. Important Dates: Jan 10 - Mar 15</Text>
        <Text style={styles.text}>4. Documents Required: Marksheet, ID, Photo</Text>
        <Text style={styles.text}>5. Contact: admissions@college.com</Text>
      </ScrollView>

      {/* Bottom text input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your question..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F9F9FF",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#5A1AFF",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
  },
  sendBtn: {
    backgroundColor: "#5A1AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  sendText: {
    color: "white",
    fontWeight: "bold",
  },
});
