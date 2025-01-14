"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = __importDefault(require("./main"));
const typeorm_1 = require("typeorm"); // using this datasource we are going to connect to db
require("reflect-metadata");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    port: parseInt(process.env.DB_PORT || "5432", 10),
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST
});
AppDataSource.initialize().then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.log("Something unexpected happened " + err);
});
const PORT = process.env.PORT || 3000;
main_1.default.listen(3000, () => {
    console.log(`Server is listening on port ${PORT}`);
});
