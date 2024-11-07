(function() {
    // Create the main widget container
    const container = document.createElement('div');
    container.id = 'chatbot-widget-container';
    container.style.position = 'fixed';
    container.style.bottom = '20px';
    container.style.right = '20px';
    container.style.width = '60px'; // Initial small size
    container.style.height = '60px'; // Initial small size
    container.style.borderRadius = '50%';
    container.style.overflow = 'hidden';
    container.style.cursor = 'pointer';
    container.style.transition = 'all 0.5s ease'; // Smooth transition
    container.style.zIndex = '9999';
    container.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
    document.body.appendChild(container);
  
    // Create the iframe (for the chat interface)
    const iframe = document.createElement('iframe');
    iframe.src = 'https://thriving-kitten-bf4f11.netlify.app/'; // Replace with your actual iframe URL
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.transition = 'all 0.5s ease'; // Smooth transition
    container.appendChild(iframe);
  
    // Create the logo image for the initial state
    const logo = document.createElement('img');
    logo.src = 'https://example.com/logo.png'; // Replace with your logo
    logo.style.position = 'absolute';
    logo.style.top = '50%';
    logo.style.left = '50%';
    logo.style.transform = 'translate(-50%, -50%)';
    logo.style.width = '50px'; // Adjust the size
    logo.style.height = '50px';
    logo.style.borderRadius = '50%'; // Round logo
    logo.style.pointerEvents = 'none'; // Prevent logo click from propagating
    container.appendChild(logo);
  
    // State tracking
    let isExpanded = false;
    let isFullscreen = false;
  
    // Function to expand the widget to chatbox size
    const expandWidget = () => {
      container.style.width = '350px'; // Expanded size
      container.style.height = '450px'; // Expanded size
      container.style.borderRadius = '16px'; // Rounded corners
      logo.style.display = 'none'; // Hide the logo when expanded
      isExpanded = true;
    };
  
    // Function to make the widget fullscreen
    const fullscreenWidget = () => {
      container.style.width = '100vw'; // Fullscreen width
      container.style.height = '100vh'; // Fullscreen height
      container.style.borderRadius = '0'; // No border radius
      container.style.top = '0';
      container.style.left = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      isFullscreen = true;
    };
  
    // Function to minimize the widget back to a small circle
    const minimizeWidget = () => {
      container.style.width = '60px'; // Minimized size
      container.style.height = '60px'; // Minimized size
      container.style.borderRadius = '50%'; // Round shape
      logo.style.display = 'block'; // Show the logo again
      iframe.style.width = '0';
      iframe.style.height = '0';
      isExpanded = false;
      isFullscreen = false;
    };
  
    // Handle the click event on the widget container
    container.addEventListener('click', () => {
      if (isFullscreen) {
        // If it's fullscreen, minimize it
        minimizeWidget();
      } else if (isExpanded) {
        // If it's expanded, go fullscreen
        fullscreenWidget();
      } else {
        // If it's minimized, expand it to chatbot size
        expandWidget();
      }
    });
  
    // Optional: Right-click to minimize (for better user experience)
    container.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      minimizeWidget();
    });
  })();
  