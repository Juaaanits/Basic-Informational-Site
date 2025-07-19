const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8000;

const server = http.createServer((req, res) => {
    let FILE_NAME = 'index.html';

    if (req.url === '/') {
        FILE_NAME = 'index.html';
    } else if (req.url === '/about') {
        FILE_NAME = 'about.html';
    } else if (req.url === '/contact-me') {
        FILE_NAME = 'contact-me.html';
    }
    else {
      FILE_NAME = '404.html';
    }

    const filePath = path.join(__dirname, 'public', FILE_NAME);

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end('Internal Server Error');
      }

      const status = FILE_NAME === '404.html' ? 404: 200;
      res.writeHead(status, { 'Content-Type': 'text/html' });
      res.end(content);
    });
});

server.listen(port, '127.0.0.1', () =>{
  console.log(`Listening on http://127.0.0.1:${port}`);

});