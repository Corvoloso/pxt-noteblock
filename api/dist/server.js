"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var messageRoutes_1 = __importDefault(require("./routes/messageRoutes"));
var authRoutes_1 = __importDefault(require("./routes/authRoutes"));
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use('/auth', authRoutes_1.default);
app.use('/message', messageRoutes_1.default);
app.listen(8888, function () {
    console.log('Backend up 🚀');
});
