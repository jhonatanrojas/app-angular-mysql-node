"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class game {
    constructor() {
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield database_1.connection.query('SELECT * FROM games');
            return data;
        });
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield database_1.connection.queryP('INSERT INTO games set ?', body);
            return data;
        });
    }
    update(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield database_1.connection.queryP('UPDATE games set ? WHERE id = ?', body);
            return data;
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield database_1.connection.queryP('SELECT * FROM games WHERE id = ?', [id]);
            return data;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield database_1.connection.queryP('DELETE FROM games WHERE id = ?', [id]);
            return data;
        });
    }
}
exports.Game = new game();
