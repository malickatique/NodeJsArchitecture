# Node JS

- Node Js Notes

## Node Modules
- A few Node modules are globally available, whereas other require to import them using `require("module-name")`
- All `node_module` files have their own scope. In order to use functions and other props in module we need to export it.
```js
    const name = "Malik Atique";
    module.exports = name;
    // OR
    const getFiles = function () => {
        return "files";
    }
    module.exports = getFiles;
    // module.exports can export objects, arrays, functions etcetera. Wahtever you provide it.
```
### Using npm modules in a project
```js
// 1. Initialize npm: It will create a file "package.json" that can manage all project dependencies
npm init


// 2. Install packages in package.json
npm install

// 3. Global modules: Global moduels will not be added in project's package.json rather they will be accessible globally
npm install nodemon -g

```

### Node Js Commands
```js
// 1. Fed a command
cmd: node App.js delete-all-files

// 2. In App.js
const command = process.argv[2];
if( command  === "delete-all-files")
    // Delete all files
```

### Popular Node Js Packages
1. For command line interface: `yargs`, `chalk`
2. Express Template Engine: `handlebars`
3. devDependency `nodemon`
4. DB: `mongoose` "https://mongoosejs.com", `validator`

## REST APIs
- HTTP Codes: https://httpstatuses.com/

## Json
- JSON.stringify(jsonObject) -> This will convert Json object to json string
- JSON.parse(jsonString) -> This will convert jsonString to jsonObject

## Pros
- Arrow functions don't bing their own `this` value
- 

## Callback vs Promises
```js
// 1. Callback
const doWorkuseCallback = (callback) => {
    setTimeout(() => {
        callback("Good", "Response");
    }, 2000);
}

doWorkuseCallback( (err, res) => {
    console.log( err, res );
});

// Output: Good Response


// 2. Promises
const doWorkPromise = new Promise( (resolve, reject) => {
    setTimeout(()=> {
        // resolve("Happy data!" );
        // OR, not both
        reject("This database sucks!");
    }, 2000)
});

doWorkPromise
.then((res) => {
    console.log("Success", res);
})
.catch((err) => {
    console.log( "Error", err );
});

// Output: This database sucks!

// 3. Promise Chaining
const add = (a, b) => {
    return new Promise ((resolve, reject) => {
        resolve(a+b);
    });
}

add(1, 2).then((sum) => {
    return add(sum, 3);
})
.then((sum2) => {
    console.log(sum2); // Output: 6
})
```

### Async Await
- Async always return a promise
- The promise will be fulfilled with the value we returned from the function
- Await wait for the promise to resolve then use its fulfilled value
```js


```

## Debug Node Application
- The most powerful of all console.log()
- Chrome built-in debugger

## JS Destructuring ES6
```js
const crypto = {
    stock: 100000,
    price: 24.5,
    checkAvalability: (price) => {}
}

// Pull attributes
const { price, checkAvalability } = crypto;

// Rename attribute
const { price:marketPrice, checkAvalability } = crypto;

// Default value of an attribute
const { price = 100, checkAvalability } = crypto;
```

# Express.Js
- Install:
    `npm init` then `npm install express`
- Express Js Topics: `express()`, `Application`, `Request`, `Response`, `Router`

## Sockets

### Server-side implementation
- Install `npm i socket.io`

```js
const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const port = 3000;

io.on("connection", socket => {
    console.log("New connection...");
});
server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
```

### Types of events
```js
    // This will emit to a single client that is connecting
    socket.emit("message", 'Welcome to Node Js World');

    // This will broadcast to everybody except for the current client
    socket.broadcast.emit("message", "A user has connected!");

    // Boradcast to everyone
    io.emit("message", "We have one more member!");
```


### Client-side implementation

- Import socket.io library
```html
<script src="/socket.io/socket.io.js"></script>
```

```js
const socket = io();

// Listen to events sent from Server
socket.on("message", message => {
    console.log( message );
});

// Emit events from client side
socket.emit("sendMessage", "Hello Socket!");

// Emit to a specific entity
socket.to(user).emit("message", "Hello!");
```