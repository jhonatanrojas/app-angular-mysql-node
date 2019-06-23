"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class indexController {
    constructor() {
    }
    index(req, res) {
        res.json({ text: ' la api esya en api/games' });
    }
}
exports.IndexController = new indexController();
