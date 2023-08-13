"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Citizens = void 0;
var mongoose_1 = require("mongoose");
var citizens = new mongoose_1.Schema({
    name: String,
    groups: [],
}, { collection: 'citizens' });
exports.Citizens = (0, mongoose_1.model)('citizens', citizens);
