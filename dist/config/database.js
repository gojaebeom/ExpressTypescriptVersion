"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = require("mysql");
// connection or createPool description ✨
// https://blog.naver.com/geguman/220549771473
var pool = mysql_1.createPool({
    port: Number(process.env.MYSQL_PORT),
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.APP_MODE === 'PORD' ? process.env.MYSQL_DB : process.env.MYSQL_DB_DEV
});
exports.query = function (query, params) {
    return new Promise(function (resolve, reject) {
        pool.query(query, params, function (err, result) {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
};
