"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
//confiugracion de que puerto tomar
app.set('port', process.env.PORT || 4000);
//middlewares
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(cors_1.default());
//routes
app.use('/api', index_1.default);
// esta carpeta es para almacenar archivos publicos
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
