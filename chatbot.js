
function createChatbot() {
  // Create container for the chatbot
  const iframeContainer = document.createElement("div");
  iframeContainer.classList.add("iframe-container");
  document.body.appendChild(iframeContainer);

  // Create the chatbot window
  const chatWindow = document.createElement("div");
  chatWindow.classList.add("chatbot-container");
  iframeContainer.appendChild(chatWindow);

  let isMaximized = false; // Track if the window is maximized

  // Add the initial chat window content
  chatWindow.innerHTML = `
    <div class="chat-header">
      <span>Chatbot</span>
      <div>
        <button class="maximize-btn">🔼</button>
        <button class="close-btn">✖</button>
      </div>
    </div>
    <iframe src="https://thriving-kitten-bf4f11.netlify.app/" frameborder="0"></iframe>
  `;

  // Get the buttons
  const maximizeBtn = chatWindow.querySelector(".maximize-btn");
  const closeBtn = chatWindow.querySelector(".close-btn");

  // Define toggleMaximize function
  function toggleMaximize() {
    if (isMaximized) {
      chatWindow.style.width = "400px"; // Reset to initial size
      chatWindow.style.height = "500px"; // Reset to initial size
      maximizeBtn.innerHTML = "🔼"; // Change button to maximize icon
    } else {
      chatWindow.style.width = "100%"; // Maximize width
      chatWindow.style.height = "100%"; // Maximize height
      maximizeBtn.innerHTML = "🔽"; // Change button to minimize icon
    }
    isMaximized = !isMaximized;
  }

  // Define closeChat function
  function closeChat() {
    iframeContainer.style.display = "none"; // Hide the iframe container
  }

  // Attach event listeners to buttons
  maximizeBtn.addEventListener("click", toggleMaximize);
  closeBtn.addEventListener("click", closeChat);

  // Styling for the iframe and chatbot
  const style = document.createElement("style");
  style.innerHTML = `
  // .iframe-container {
  //   position: fixed;
  //   bottom: 20px;
  //   right: 20px;
  //   width: 100%;
  //   height: 100%;
  //   border-radius: 8px;
  //   overflow: hidden;
  //   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  //   z-index: 9999;
  //   transition: all 0.3s ease-in-out;
  // }
  // iframe {
  //   width: 100%;
  //   height: 100%;
  //   border: none;
  // }
  .chatbot-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
  }
  .maximized {
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh !important;
    margin: 0;
  }
  .chat-icon {
    background: linear-gradient(135deg, #0078ff, #00c6ff);
    color: white;
    font-size: 24px;
    padding: 15px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .chat-icon:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  }
  .chat-window {
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 320px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    max-height: 500px;
  }
  .chat-header {
    background: linear-gradient(135deg, #0078ff, #00c6ff);
    color: white;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
  }
  .close-btn, .maximize-btn {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 18px;
    transition: color 0.2s;
  }
  .close-btn:hover, .maximize-btn:hover {
    color: #ff4d4d;
  }
  .chat-messages {
    padding: 15px;
    flex-grow: 1;
    overflow-y: auto;
    max-height: 400px;
  }
  .message {
    padding: 10px 15px;
    border-radius: 8px;
    margin: 8px 0;
    font-size: 14px;
    max-width: 75%;
    line-height: 1.4;
  }
  .message.user {
    background-color: #0078ff;
    color: white;
    align-self: flex-end;
    border-bottom-right-radius: 0;
  }
  .message.bot {
    background-color: #f1f1f1;
    color: #333;
    align-self: flex-start;
    border-bottom-left-radius: 0;
  }
  .chat-input {
    display: flex;
    border-top: 1px solid #ddd;
    padding: 10px;
    background-color: #f9f9f9;
  }
  .chat-input input {
    flex-grow: 1;
    border: none;
    padding: 10px;
    border-radius: 20px;
    outline: none;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  .chat-input button {
    background: linear-gradient(135deg, #0078ff, #00c6ff);
    border: none;
    color: white;
    padding: 10px 15px;
    margin-left: 10px;
    border-radius: 20px;
    cursor: pointer;
  }
  .chatbot-container.maximized .chat-window {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    max-width: none;
  }
  .chatbot-container.maximized .chat-icon {
    display: none;
  }
`;
  document.head.appendChild(style);
}

// Call the function to create and show the chatbot
createChatbot();
