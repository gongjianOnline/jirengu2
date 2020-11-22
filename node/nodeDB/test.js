const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
});

connection.connect();
//CREATE TABLE IF NOT EXISTS user CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai-ci;
connection.query('CREATE DATABASE IF NOT EXISTS fang DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_unicode_520_ci;', function (error, results, fields) {
    if (error) throw error;
    console.log("创建数据库")
    console.log(results)
});
//链接数据库
connection.query('use fang;')

connection.query(`CREATE TABLE IF NOT EXISTS user(
    name text,
    age int
)`, function (error, results, fields) {
    if (error) throw error;
    console.log("创建表");
    console.log(results)
});

connection.end();