"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnection = void 0;
const mongoose_1 = require("mongoose");
async function startConnection() {
    await mongoose_1.connect('mongodb://localhost/proyecto-web-db', {
        useNewUrlParser: true,
        useFindAndModify: false
    });
    console.log('Base de Datos Concectada');
}
exports.startConnection = startConnection;
