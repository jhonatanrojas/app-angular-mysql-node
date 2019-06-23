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
const game_1 = require("./../models/game");
class gameController {
    constructor() {
    }
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield game_1.Game.getAll();
            res.json(data);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield game_1.Game.create([req.body]);
            console.log(req.body);
            res.json({ "text": "juego guardado" });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield game_1.Game.getOne(id);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The game doesn't exits" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield game_1.Game.delete(id);
            res.json({ message: "The game was deleted" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const data = yield game_1.Game.update([req.body, id]);
            res.json({ "text": "juego actualizado" });
        });
    }
}
const GameController = new gameController();
exports.default = GameController;
