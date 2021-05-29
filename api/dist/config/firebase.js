"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("firebase/app"));
require("firebase/auth");
require("firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyBBhxtQeWsc84ysfAmmzLuttKjdhHMPNQ0",
    authDomain: "pxt-noteblock.firebaseapp.com",
    projectId: "pxt-noteblock",
    storageBucket: "pxt-noteblock.appspot.com",
    messagingSenderId: "661902995460",
    appId: "1:661902995460:web:a9ebca1870722245b50551",
};
exports.default = app_1.default.initializeApp(firebaseConfig);
