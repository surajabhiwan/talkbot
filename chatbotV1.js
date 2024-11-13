function createChatbot() {
  // Extract subscriptionId from the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const subscriptionId = urlParams.get('subscriptionId'); // Get subscriptionId from the query string

  // Check if subscriptionId is available
  if (!subscriptionId) {
    console.error("No subscriptionId found in the URL.");
    return; // Exit the function if no subscriptionId is found
  }

  // Create container for the chatbot
  const iframeContainer = document.createElement("div");
  iframeContainer.classList.add("iframe-container");
  iframeContainer.style.display = "none"; // Initially hide the chat window
  document.body.appendChild(iframeContainer);

  // Create the chatbot window
  const chatWindow = document.createElement("div");
  chatWindow.classList.add("chatbot-container");
  iframeContainer.appendChild(chatWindow);

  let isMaximized = false; // Track if the window is maximized

  // Create and add the chat icon inside the chatbot container
  const chatIcon = document.createElement("div");
  chatIcon.classList.add("chat-icon");
  chatIcon.innerHTML = "💬"; // You can use any emoji or text for the icon
  document.body.appendChild(chatIcon); // Attach icon to body directly

  // Add the initial chat window content
  chatWindow.innerHTML = `
    <div class="chat-header">
      <span>Chatbot</span>
      <div>
        <button class="maximize-btn">🔼</button>
        <button class="close-btn">✖</button>
      </div>
    </div>
    <iframe id="chatbot-frame" src="https://thriving-kitten-bf4f11.netlify.app/" frameborder="0"></iframe>
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
    chatIcon.style.display = "block"; // Show the chat icon inside chatbot-container
  }

  // Define openChat function
  function openChat() {
    iframeContainer.style.display = "block"; // Show the iframe container
    chatIcon.style.display = "none"; // Hide the chat icon inside chatbot-container
  }

  // Function to send subscriptionId to iframe
  function sendSubscriptionIdToIframe() {
    const iframe = document.getElementById('chatbot-frame');
    if (iframe) {
      // Send the subscription ID to the iframe using postMessage
      iframe.contentWindow.postMessage({ type: 'authenticate', subscriptionId: subscriptionId }, '*');
    }
  }

  // Listen for the iframe to load and send the subscription ID
  window.addEventListener('load', function() {
    sendSubscriptionIdToIframe();
  });

  // Attach event listeners to buttons
  maximizeBtn.addEventListener("click", toggleMaximize);
  closeBtn.addEventListener("click", closeChat);
  chatIcon.addEventListener("click", openChat); // Show chat on icon click

  // Styling for the iframe and chatbot
  const style = document.createElement("style");

  style.innerHTML = `
    .iframe-container {
      position: fixed;
      bottom: 0px;
      right: 0px;
      width: 400px; /* Initial size */
      height: 500px; /* Initial size */
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
      z-index: 9999;
      transition: all 0.3s ease-in-out;
    }
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
    .chatbot-container {
      position: fixed;
      bottom: 0px;
      right: 0px;
      z-index: 1000;
      transition: all 0.3s ease-in-out;
      overflow: hidden;
      width: 400px; /* Initial width */
      height: 500px; /* Initial height */
    }
    .chat-icon {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: linear-gradient(135deg, #0078ff, #00c6ff);
      color: white;
      font-size: 24px;
      padding: 15px;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      z-index: 9998; /* Ensure it's under the chat window */
    }
    .chat-icon:hover {
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
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
  `;

  document.head.appendChild(style);
}

// Call the function to create and show the chatbot
createChatbot();
