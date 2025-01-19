"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const pgClient = new pg_1.Client("postgresql://neondb_owner:DOL8hto1dAVc@ep-lingering-glade-a8ieblb5.eastus2.azure.neon.tech/neondb?sslmode=requirez");
pgClient.connect();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    try {
        const insertQuery = `INSERT INTO users (username,email,password) VALUES ($s1,$s2,$s3);`;
        const response = yield pgClient.query(insertQuery, [username, email, password]);
        res.json({
            message: "signed successfully"
        });
    }
    catch (e) {
        res.json({
            message: "ther is error while connecting to server"
        });
    }
}));
app.listen(4000, () => {
    console.log("connected over a database");
});
