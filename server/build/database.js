"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
class dataBase {
    constructor() {
        /* mysql.createConnection(keys.database).then((conn) => {
         this.connection = conn;
   
       });*/
        const connection = promise_mysql_1.default.createPool(keys_1.default.database).then(connect => {
            this.connection = connect;
        });
    }
    query(sql) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = yield this.connection.query(sql);
            return consulta;
        });
    }
    queryP(sql, dt) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = yield this.connection.query(sql, dt);
            return consulta;
        });
    }
}
exports.connection = new dataBase();
