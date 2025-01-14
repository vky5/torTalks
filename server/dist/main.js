"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path")); // dunno why but the relative path was giving error most likey due to the fact that after compiling it was messing with the paths
const app = (0, express_1.default)();
const envPath = path_1.default.resolve(__dirname, "../config.env");
dotenv_1.default.config({ path: envPath });
app.use(express_1.default.json()); // parse body sent with request
app.use((0, morgan_1.default)("dev")); // for logging all the requests
app.use('/', (req, res) => {
    res.status(200).json({
        status: 'success'
    });
});
exports.default = app;
