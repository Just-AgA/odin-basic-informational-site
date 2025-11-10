const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');

const PORT = 8080;

const server = http.createServer((req, res) => {
  let filepath;

  if (req.url === '/style.css') {
    const cssPath = path.join(__dirname, 'style.css');

    fs.readFile(cssPath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading CSS');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(data);
      }
    });
    return;
  }

  switch (req.url) {
    case '/':
      filepath = path.join(__dirname, 'index.html');
      break;
    case '/home':
      res.writeHead(302, { Location: '/' });
      res.end();
      return;
    case '/about':
      filepath = path.join(__dirname, 'about.html');
      break;
    case '/contact-me':
      filepath = path.join(__dirname, 'contact-me.html');
      break;
    default:
      filepath = path.join(__dirname, '404.html');
  }

  fs.readFile(filepath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 - Internal Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
