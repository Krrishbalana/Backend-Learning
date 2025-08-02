const http = require('node:http');

const server = http.createServer((req, res)=>{
    res.end("hello bhai log")
})

server.listen(3000);