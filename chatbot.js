(function () {
  // Inject CSS into the head of the document
  const style = document.createElement('style');
  style.innerHTML = `
    .iframe-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 300px;
      height: 400px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
      z-index: 9999;
      transition: all 0.3s ease-in-out;
    }
    .iframe-container.maximized {
      width: 100vw;
      height: 100vh;
      bottom: 0;
      right: 0;
      border-radius: 0;
    }
    .chat-icon {
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-size: 32px;
      cursor: pointer;
      background: #3498db;
      border-radius: 50%;
      padding: 10px;
    }
    .chat-window {
      background: white;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }
    .chat-header {
      padding: 10px;
      background: #3498db;
      color: white;
      display: flex;
      justify-content: space-between;
    }
    .chat-messages {
      padding: 10px;
      height: 80%;
      overflow-y: auto;
    }
    .message {
      padding: 5px;
      margin-bottom: 10px;
    }
    .message.user {
      background: #ecf0f1;
      text-align: right;
    }
    .message.bot {
      background: #bdc3c7;
    }
    .chat-input {
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .chat-input input {
      width: 80%;
      padding: 5px;
    }
    .chat-input button {
      padding: 5px 10px;
      background: #3498db;
      color: white;
      border: none;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  // Create the chatbot component
  const chatbotContainer = document.createElement('div');
  chatbotContainer.classList.add('iframe-container');
  document.body.appendChild(chatbotContainer);

  const chatbot = document.createElement('div');
  chatbot.classList.add('chat-window');
  chatbotContainer.appendChild(chatbot);

  const chatHeader = document.createElement('div');
  chatHeader.classList.add('chat-header');
  chatHeader.innerHTML = `
    <span>Chatbot</span>
    <div>
      <button class="maximize-btn">🔼</button>
      <button class="close-btn">✖</button>
    </div>
  `;
  chatbot.appendChild(chatHeader);

  const chatMessages = document.createElement('div');
  chatMessages.classList.add('chat-messages');
  chatbot.appendChild(chatMessages);

  const chatInput = document.createElement('div');
  chatInput.classList.add('chat-input');
  chatInput.innerHTML = `
    <input type="text" placeholder="Type a message..." />
    <button>Send</button>
  `;
  chatbot.appendChild(chatInput);

  // Define chatbot logic
  let isMaximized = false;
  const messages = [
    { sender: 'bot', text: 'Hello! How can I help you today?' },
  ];

  const sendMessage = () => {
    const inputField = chatInput.querySelector('input');
    const messageText = inputField.value.trim();
    if (messageText) {
      messages.push({ sender: 'user', text: messageText });
      inputField.value = '';

      const userMessage = document.createElement('div');
      userMessage.classList.add('message', 'user');
      userMessage.textContent = messageText;
      chatMessages.appendChild(userMessage);

      setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot');
        botMessage.textContent = 'This is an automated response.';
        chatMessages.appendChild(botMessage);
      }, 1000);
    }
  };

  chatInput.querySelector('button').addEventListener('click', sendMessage);

  // Handle maximize and close buttons
  const maximizeButton = chatHeader.querySelector('.maximize-btn');
  const closeButton = chatHeader.querySelector('.close-btn');

  maximizeButton.addEventListener('click', () => {
    isMaximized = !isMaximized;
    chatbotContainer.classList.toggle('maximized', isMaximized);
    maximizeButton.textContent = isMaximized ? '🔽' : '🔼';
  });

  closeButton.addEventListener('click', () => {
    chatbotContainer.style.display = 'none'; // Hide the entire chatbot when close is clicked
  });

  // Show the chat icon
  const chatIcon = document.createElement('div');
  chatIcon.classList.add('chat-icon');
  chatIcon.textContent = '💬';
  document.body.appendChild(chatIcon);

  // Toggle the chatbot window visibility
  chatIcon.addEventListener('click', () => {
    chatbotContainer.style.display = chatbotContainer.style.display === 'none' ? 'block' : 'none';
  });
})();
