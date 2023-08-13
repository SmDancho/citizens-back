"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cities = void 0;
var mongoose_1 = require("mongoose");
var cities = new mongoose_1.Schema({
    id: Number,
    name: String,
    data: String,
}, { collection: 'cities' });
exports.Cities = (0, mongoose_1.model)('cities', cities);
