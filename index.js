const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Devops Team From Skills IT \n');
});

server.listen(PORT, () => {
  console.log(Server running at http://localhost:${PORT}/);
});