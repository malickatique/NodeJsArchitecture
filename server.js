const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");


const app = express();
const server = http.createServer(app);
const io = socketio(server);
const port = 3001;

// Set static path
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", socket => {
    console.log("New client connected!");

    // This will emit to a single client that is connecting
    socket.emit("message", 'Welcome to Node Js World');

    // This will broadcast to everybody except for the current client
    socket.broadcast.emit("message", "A user has connected!");

    // Boradcast to everyone
    io.emit("message", "We have one more member!");
});

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});