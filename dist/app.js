"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var dotenv_1 = __importDefault(require("dotenv"));
var user_router_1 = __importDefault(require("./api/user/user.router"));
dotenv_1.default.config();
var app = express_1.default();
app.use(morgan_1.default("dev"));
app.use("/users", user_router_1.default);
// app start
app.listen(process.env.APP_PORT, function () { return console.log("server is running on " + process.env.APP_PORT); });
