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

# Mongo DB
- Installation
    1. Download `MongoDB Community Server` as .msi under On-premises on mongodb.com website
    2. Install the .msi file
    3. Add mongo bin to windows PATH variable
    4. Create db dir in `C:/Data/db` all DBs will be saved here
    5. Run `mongod` in CMD then `mongo`
    6. Install MongoDB admin toold GUI: Mongo DB Compass

- Connect Express with Mongo DB
    1. Mongo DB Driver and Documentations: https://docs.mongodb.com/drivers/node/current/
    2. Install `npm i mongodb` driver to connect with Mongo DB

### Mongo DB Usage
```js
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const connectionURL = "mongodb://127.0.0.1:27017";
const database = "vaultspay-db";
const client = new MongoClient(connectionURL);

// Establish Connection
try 
{
    // Connect with client DB
    client.connect();
    const db = client.db(database);
} 
catch (error) 
{
    return console.log( error );
}
```

- The ObjectID of a collections instance consists of three parts: time stamp, random number and ...

#### Create field
```js
db.collection("users").insertOne({
    name: "Malik",
    age: 40
}, (res, err) => {
    if( err )
    {
        return console.log( err );
    }
    console.log( res );
});
```

#### Read data
```js
db.collection("users").findOne({
    name: "Malik",
    // Or ID etc
}, 
(err, record) => {
    if( err )
    {
        return console.log( err );
    }
    console.log( record );
});

// Fectch collection
db.collection("users").find({name: "Malik"}).toArray((err, users) => {

    if( err )
    {
        return console.log( err );
    }
    console.log( users );
});
```
- For Otrher DB Operations check MongoDB documentation

### Mongoose Library
- Install: `npm i mongoose`


### Express Router
```js


```