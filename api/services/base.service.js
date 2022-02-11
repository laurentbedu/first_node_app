const mysql = require("mysql");
const dbConfig = require('../config/db.config')
class BaseService{

    constructor(){
        this.name = this.constructor.name.replace(`Service`,``);
        this.table = this.name.toLowerCase();
    }

    static db;
    static #connect = () => {
        if(!BaseService.db){
            BaseService.db = mysql.createPool({
                host: dbConfig.HOST,
                port: dbConfig.PORT,
                user: dbConfig.USER,
                password: dbConfig.PASS,
                database: dbConfig.NAME
              });
        }
        return BaseService.db;
    }

    static #query = async (sql) => {
        return await new Promise((resolve, reject)=>{
            BaseService.#connect().query(sql,  (err, rows)=>{
                if(err){
                    return reject(err);
                }
                return resolve(rows);
            });
        });
    }

    getAll = async () => {
        const sql = `SELECT * FROM ${this.table}`;
        const rows =  await BaseService.#query(sql);
        return rows;
    }

    getOne = async (id) => {
        const sql = `SELECT * FROM ${this.table} WHERE id=${id}`;
        const rows =  await BaseService.#query(sql);
        return rows.length == 1 ? rows.pop() : null;
    }



}

module.exports = BaseService;