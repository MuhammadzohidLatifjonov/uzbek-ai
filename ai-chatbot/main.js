document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
  
    function displayMessage(message, sender) {
        const msgElement = document.createElement('div');
        msgElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
        
        const senderText = sender === 'user' ? '👤' : '🤖';
        msgElement.innerHTML = `<strong>${senderText}: </strong>${message}`;
        
        chatBox.appendChild(msgElement);
        chatBox.scrollTop = chatBox.scrollHeight;
        
        if (sender === 'bot') {
          msgElement.classList.add('fade-in');
        }
      }
  
    function processUserInput() {
      const userInputValue = userInput.value.trim();
      if (userInputValue === "") return;
  
      displayMessage(userInputValue, "user");
  
      if (responses.hasOwnProperty(userInputValue)) {
        const botResponse = responses[userInputValue];
        displayMessage(botResponse, "bot");
      } else {
        displayMessage("Kechirasiz, men buni tushunmadim! 🤨. Qayta urinib ko'ring.", "bot");
      }
  
      userInput.value = "";
    }
  
    sendBtn.addEventListener("click", processUserInput);
  
    userInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        processUserInput();
      }
    });
  });
  