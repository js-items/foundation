"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cursor_1 = require("../../interfaces/cursor");
var sortOrder_1 = require("../../interfaces/sortOrder");
var xor_1 = __importDefault(require("../xor"));
exports.default = (function (sortKey, sort, pagination, 
// tslint:disable-next-line:no-any
cursorObj) {
    var sortOrder = sort[sortKey];
    var ascendingPagination = !xor_1.default(sortOrder === sortOrder_1.asc, pagination.after !== cursor_1.start);
    var cursorValue = cursorObj[sortKey];
    if (ascendingPagination) {
        return sortKey === "id" ? { $gt: cursorValue } : { $gte: cursorValue };
    }
    else {
        return sortKey === "id" ? { $lt: cursorValue } : { $lte: cursorValue };
    }
});
//# sourceMappingURL=index.js.map