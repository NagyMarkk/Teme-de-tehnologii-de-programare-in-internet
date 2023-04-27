const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h1>Hello from my web server!</h1></body></html>');
        res.end();
      } else if (req.url === '/SPRING.html') {
        
        const filePath = path.join(__dirname, 'SPRING.html');
        const readStream = fs.createReadStream(filePath);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        readStream.pipe(res);
      } else if (req.url === '/WINTER.html') {
       
        const filePath = path.join(__dirname, 'WINTER.html');
        const readStream = fs.createReadStream(filePath);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        readStream.pipe(res);
      } else {
        
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<html><body><h1>404 Not Found</h1></body></html>');
        res.end();
      }
  });

  server.listen(8080, () => {
    console.log('Serverul rulează la adresa http://localhost:8080');
  });