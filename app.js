// Import Express.js module
import express from 'express';

import path from 'path';
const _dirname = path.resolve();

// Initilize the Express aplication
const app = express ();
app.use(express.static('public'));

// Define the port number for the server to listen on 
const port = parseInt(process.env.PORT) || 8080;

// Define a route for the root URL ('/') and specify the response
app.get('/', (req, res) => {
    res.send('Hello World, Im Ficus!'); // Send 'Hello World, Im Ficus!' as the response
 });

// Send HTML file to web browser for the URL ('/index')
app.get('/index', function(req, res) {
    res.sendFile(path.join(_dirname, '/index.html'));
});

// Start the server and have it listen on the defined port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); //Log a message to the console indicating the server is running
});
