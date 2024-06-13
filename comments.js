import { createServer } from 'http';
import http from 'http';

// Create web server
const server = createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body
    res.end('Hello, World!');
});

// Start the server
server.listen(3000, 'localhost', () => {
    console.log('Server is running on http://localhost:3000');
});