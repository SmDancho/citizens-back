"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var contoller_1 = require("./contoller");
var express_1 = __importDefault(require("express"));
var router = (0, express_1.default)();
router.get('/all', function (req, res) {
    (0, contoller_1.getCities)(req, res);
});
exports.default = router;
