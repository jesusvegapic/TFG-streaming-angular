const PATH_PROJECT = '/dist/TFG-streaming';
const express = require('express');
const app = express();

const http = require('http');
const path = require('path');
const server = http.createServer(app);

app.use(express.static(__dirname + PATH_PROJECT));
// @ts-ignore
app.get('/', (req,res) => res.sendFile(path.join(__dirname, PATH_PROJECT, index.html)));

server.listen(process.env.PORT || 8080, () => {
    if(!process.env.PORT) {
        console.log('Running with Express... http://localhost:8080/');
    }
});