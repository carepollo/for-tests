"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (request, response) => {
            response.send('hola mundo');
        });
    }
}
const indexRoute = new IndexRoute();
exports.default = indexRoute.router;
