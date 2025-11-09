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
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
