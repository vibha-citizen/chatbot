import spacy

nlp = spacy.load("en_core_web_sm")

print("Bot: Hi! Type something (type 'bye' to exit)")

while True:
    user_input = input("You: ")

    text = user_input.lower()

    if text == "bye":
        print("Bot: Goodbye! 👋")
        break

    elif text in ["hi", "hello", "hey"]:
        print("Bot: Hello! How can I help you?")

    elif "how are you" in text:
        print("Bot: I am fine. How are you?")

    elif "your name" in text:
        print("Bot: My name is SimpleBot.")

    elif "time" in text:
        from datetime import datetime
        now = datetime.now().strftime("%H:%M:%S")
        print("Bot: Current time is", now)

    else:
        print("Bot: Sorry, I don't understand.")