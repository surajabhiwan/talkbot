(function() {
    // Create and style the container div
    const container = document.createElement('div');
    container.id = 'chatbot-widget-container';
    container.style.position = 'fixed';
    container.style.bottom = '20px';
    container.style.right = '20px';
    container.style.width = '60px';
    container.style.height = '60px';
    container.style.borderRadius = '50%';
    container.style.overflow = 'hidden';
    container.style.cursor = 'pointer';
    container.style.transition = 'all 0.3s ease';
    container.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
    container.style.zIndex = '9999';
    document.body.appendChild(container);
  
    // Create the iframe and insert it inside the container
    const iframe = document.createElement('iframe');
    iframe.src = "https://thriving-kitten-bf4f11.netlify.app/";  // Replace with your actual iframe URL
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.transition = 'all 0.3s ease';
    container.appendChild(iframe);
  
    // Initial state: Minimized (small circle)
    let isMinimized = true;
    let isFullscreen = false;
  
    // Function to expand the widget (to chatbot size)
    const expandWidget = () => {
      container.style.width = '350px';
      container.style.height = '450px';
      container.style.borderRadius = '16px';
    };
  
    // Function to make the widget fullscreen
    const fullscreenWidget = () => {
      container.style.width = '100vw';
      container.style.height = '100vh';
      container.style.borderRadius = '0';
      container.style.top = '0';
      container.style.left = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      isFullscreen = true;
    };
  
    // Function to minimize the widget
    const minimizeWidget = () => {
      container.style.width = '60px';
      container.style.height = '60px';
      container.style.borderRadius = '50%';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      isMinimized = true;
      isFullscreen = false;
    };
  
    // Click event listener to toggle between the states: minimize -> expand -> fullscreen
    container.addEventListener('click', () => {
      if (isFullscreen) {
        // If it's fullscreen, minimize
        minimizeWidget();
      } else if (isMinimized) {
        // If it's minimized, expand to chatbot size
        expandWidget();
        isMinimized = false;
      } else {
        // If it's expanded, go fullscreen
        fullscreenWidget();
        isMinimized = false;
      }
    });
  
    // Optional: Add a right-click event to reset the widget to the minimized state
    container.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      minimizeWidget();
    });
  })();
  