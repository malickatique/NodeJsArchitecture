const socket = io();

socket.on("message", message => {
    console.log( message );
});

// Form submission
socket.emit("sendMessage", "Hello Socket!");