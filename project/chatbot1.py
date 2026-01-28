import spacy

nlp = spacy.load("en_core_web_sm")

print("Chatbot started. Type 'bye' to exit.")

while True:
    user_input = input("You: ").lower()

    if user_input == "bye":
        print("Bot: Bye! Have a nice day.")
        break

    doc = nlp(user_input)

    if "hi" in user_input or "hello" in user_input:
        print("Bot: Hi! How can I help you?")

    elif "how are you" in user_input:
        print("Bot: I'm fine, thank you! How about you?")

    elif "your name" in user_input:
        print("Bot: My name is RuleBot.")

    else:
        print("Bot: Sorry, I didn't understand that.")