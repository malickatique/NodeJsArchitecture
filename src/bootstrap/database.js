const mongoose = require('mongoose');
// const { env } = require('@burency/common');

const DBConn = {
    connURL: process.env.DB_CONNECTION_URL,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    async init() {
        console.log('HERE', this);
        // await mongoose.connect(this.connectionUrl + ':' + this.port + '/' + this.database);
    },
};

// class DBConnection {
//     #connectionUrl;
//     #port;
//     #database;
//     constructor() {
//         this.#connectionUrl = env('DB_CONNECTION_URL');
//         this.#port = env('DB_PORT');
//         this.#database = env('DB_DATABASE');
//     }
//     async initDBConnection() {
//         try {
//             if (process.env.NODE_ENV == 'local') {
//                 await mongoose.connect(this.#connectionUrl + ':' + this.#port + '/' + this.#database);
//             } else if (process.env.NODE_ENV == 'production') {
//                 await mongoose.connect('mongodb://' + this.#database + ':' + this.#port + '/' + this.#database);
//             } else if (process.env.NODE_ENV == 'development') {
//                 await mongoose.connect('mongodb://' + this.#database + ':' + this.#port + '/' + this.#database);
//             }
//             console.log('******************');
//             console.log(
//                 `${process.env.APP_NAME} connected to  mongodb://${this.#database}:${this.#port}/${this.#database}`
//             );
//             console.log('******************');
//         } catch (err) {
//             console.log('******************');
//             console.log('Error connecting with the database =>', err.message);
//             console.log('******************');
//         }
//     }
//     async dropDb() {
//         const results = await Promise.all(
//             Object.keys(mongoose.connection.collections).map(async (coll) => {
//                 return mongoose.connection.collections[mongoose.connection.collections[coll].name].drop();
//             })
//         );
//         console.log(results);
//     }
//     killDBConnection() {}
// }

// module.exports = new DBConnection();
module.exports = DBConn;
