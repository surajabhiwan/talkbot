// chatbot.js

(function() {
    const chatbotURL = "https://talkbot-alpha.vercel.app"; // Replace with your hosted React app URL
  
    // Create the style element
    const style = document.createElement('style');
    style.innerHTML = `
      #chatbot-frame {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 300px;
        height: 400px;
        border: none;
        border-radius: 8px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        z-index: 10000;
      }
      #chatbot-close-btn {
        position: fixed;
        bottom: 440px;
        right: 20px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #ff5f5f;
        color: #fff;
        border: none;
        font-size: 16px;
        cursor: pointer;
        z-index: 10001;
        text-align: center;
        line-height: 24px;
      }
    `;
  
    // Append the style to the document head
    document.head.appendChild(style);
  
    // Create the iframe
    const iframe = document.createElement('iframe');
    iframe.src = chatbotURL;
    iframe.id = 'chatbot-frame';
  
    // Append the iframe to the document body
    document.body.appendChild(iframe);
  
    // Create the close button
    const closeButton = document.createElement('button');
    closeButton.id = 'chatbot-close-btn';
    closeButton.innerText = '×';
    closeButton.onclick = () => {
      iframe.style.display = 'none';
      closeButton.style.display = 'none';
    };
  
    // Append the close button to the document body
    document.body.appendChild(closeButton);
  })();
  