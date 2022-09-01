const http = require('http');
const path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes');
const DBConn = require('./database');
require('dotenv').config({ path: path.join(process.cwd(), `.env.${process.env.NODE_ENV}`) });

class Application {
    constructor() {
        this.port = process.env.APP_PORT;
        this.url = process.env.APP_URL;
    }
    initiateApp() {
        this.app = express();
        this.server = http.createServer(this.app);
    }
    appConfigurations() {
        // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // parse application/json
        this.app.use(bodyParser.json());
    }
    globalMiddlewares() {
        this.app.use(cors());
        // this.app.use(logger);
        // this.app.use(validate);
    }
    registerRoutes() {
        this.app.use(routes);
    }
    globalErrorHandler() {
        // this.app.use(errorHandler);
        this.app.all('*', (req, res, next) => {
            res.status(404).json(
                Response.notFound({ message: `Sorry! Couldn't find ${req.originalUrl} on the server!` })
            );
        });
    }
    async connectDatabase() {
        DBConn.init();
        // await database.initDBConnection();
    }
    runServer() {
        this.webSocketServer = this.server.listen(this.port, () => {
            console.log(`Server listening at ${this.url}:${this.port}`);
        });
    }
    start() {
        this.initiateApp();
        this.appConfigurations();
        this.globalMiddlewares();
        this.registerRoutes();
        this.globalErrorHandler();
        this.connectDatabase();
        this.runServer();
    }
}

module.exports = new Application();
