const http = require('http');

// Test case 1: Check if the server responds with status code 200
http.get('http://localhost:3000', (res) => {
    if (res.statusCode === 200) {
        console.log('Test case 1 passed: Server responded with status code 200');
    } else {
        console.error('Test case 1 failed: Server did not respond with status code 200');
    }
});

// Test case 2: Check if the server responds with the correct content type header
http.get('http://localhost:3000', (res) => {
    if (res.headers['content-type'] === 'text/plain') {
        console.log('Test case 2 passed: Server responded with correct content type header');
    } else {
        console.error('Test case 2 failed: Server did not respond with correct content type header');
    }
});

// Test case 3: Check if the server responds with the correct response body
http.get('http://localhost:3000', (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        if (data === 'Hello, World!') {
            console.log('Test case 3 passed: Server responded with correct response body');
        } else {
            console.error('Test case 3 failed: Server did not respond with correct response body');
        }
    });
});