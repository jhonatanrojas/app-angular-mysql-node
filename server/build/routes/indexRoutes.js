"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControler_1 = require("./../controllers/indexControler");
class indexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexControler_1.IndexController.index);
    }
}
const indexRoute = new indexRoutes();
exports.default = indexRoute.router;
