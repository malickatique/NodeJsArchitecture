const mongoose = require('mongoose');

const DBConn = {
    connURL: process.env.DB_CONNECTION_URL,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    db: null,
    async init() {
        this.db = await mongoose.connect(this.connURL + ':' + this.port + '/' + this.database);
        if (this.db) {
            console.log('Database connected successfully!');
        }
    },
};

module.exports = DBConn;
