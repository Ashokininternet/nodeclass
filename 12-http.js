const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to node.js server');
    } else if (req.url === '/history') {
        res.end('Here is your history');
    } else {
        res.end(`
            <h1>Error 404: Not Found</h1> 
        `);
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
