"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const configDB_1 = __importDefault(require("./configDB"));
const myConnection = promise_mysql_1.default.createPool(configDB_1.default.database);
myConnection.getConnection().then(conected => {
    myConnection.releaseConnection(conected);
    console.log(configDB_1.default.database.username);
});
exports.default = myConnection;
