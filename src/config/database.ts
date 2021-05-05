import { createPool, Pool } from "mysql";

// connection or createPool description ✨
// https://blog.naver.com/geguman/220549771473
const pool:Pool = createPool({
    port : Number(process.env.MYSQL_PORT),
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASS,
    database : process.env.APP_MODE === 'PORD' ? process.env.MYSQL_DB : process.env.MYSQL_DB_DEV
});

exports.query = function(query:string, params:Array<any>):any{
    return new Promise((resolve, reject) => { 
        pool.query(query, params, (err, result) => {
            if(err) reject(err);
            else resolve(result);
        });
    });
}