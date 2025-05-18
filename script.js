const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  let filePath;

  if (req.url === '/' || req.url === '/index') {
    filePath = 'index.html';
  } else if (req.url === '/about') {
    filePath = 'about.html';
  } else if (req.url === '/contact-me') {
    filePath = 'contact-me.html';
  } else {
    filePath = '404.html';
  }

  const fullPath = path.join(__dirname, filePath);

  fs.readFile(fullPath, (err, content) => {
    if (err) {
      // Server error handling
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      // Set status code based on file served
      let statusCode = (filePath === '404.html') ? 404 : 200;
      res.writeHead(statusCode, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
