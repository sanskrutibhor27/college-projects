const chatbotData = {
  "hello": "Hey cutie! Welcome to ARTIQ.IT 💖 How can I help you today?",
  "what do you sell": "We sell custom frames, polaroids, phone charms, phone covers, bracelets, scrunchies, and flower bouquets!",
  " frames": "Yes! We make cute, personalized frames. DM us @artiq.it to order.",
  "polaroid sizes": "We offer 3 polaroid sizes: Mini (₹30), Classic (₹50), Jumbo (₹80).",
  "bracelets": "Yes! Handmade aesthetic bracelets in different colors ✨",
  "phone charms": "Phone charms are fully customizable! You can choose beads, charms, and colors 🌈",
  "how to order": "Just DM us on Instagram @artiq.it with your product and design choice 📩",
  "delivery": "We ship all over India 🇮🇳 Charges vary by location.",
  "price": "Prices start at ₹30! Visit our IG for the latest catalog 🛍️",
  "payment methods": "We accept UPI, GPay, and Bank Transfer 💳",
  "birthday gifts": "Yes! We specialize in personalized birthday hampers 🎂🎉",
  "bye": "Thanks for visiting ARTIQ.IT 💖 Come again soon!"
};

function sendMessage() {
  const inputField = document.getElementById("user-input");
  const userMessage = inputField.value.trim();
  if (userMessage === "") return;

  displayMessage("You", userMessage);
  inputField.value = "";

  setTimeout(() => {
    const botResponse = getBotResponse(userMessage);
    displayMessage("Bot", botResponse);
  }, 500);
}

function displayMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("p");
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();
  for (let key in chatbotData) {
    if (input.includes(key)) {
      return chatbotData[key];
    }
  }
  return "Sorry, I didn’t get that 💭 Try asking something else or DM us @artiq.it 💌";
}

// Show/Hide Popup
document.getElementById("chat-toggle").onclick = function () {
  const popup = document.getElementById("chat-popup");
  popup.style.display = popup.style.display === "none" ? "block" : "none";
};
