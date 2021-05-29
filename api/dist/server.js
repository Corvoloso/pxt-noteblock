"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.post('/message', function (request, response) {
    response.status(200).send('Righto');
});
app.use(function () {
    console.log('App Running 🚀');
});
app.listen(8888);
