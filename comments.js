// Create web server
const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;
    if (path === '/comments') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        fs.readFile('comments.json', 'utf8', (err, data) => {
            res.end(data);
        });
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});