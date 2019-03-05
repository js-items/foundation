"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cursor_1 = require("../../interfaces/Cursor");
var SortOrder_1 = require("../../interfaces/SortOrder");
var xor_1 = __importDefault(require("../xor"));
exports.default = (function (sortKey, sort, pagination, 
// tslint:disable-next-line:no-any
cursorObj) {
    var sortOrder = sort[sortKey];
    var ascendingPagination = !xor_1.default(sortOrder === SortOrder_1.asc, pagination.after !== Cursor_1.start);
    var cursorValue = cursorObj[sortKey];
    if (ascendingPagination) {
        return sortKey === "id" ? { $gt: cursorValue } : { $gte: cursorValue };
    }
    else {
        return sortKey === "id" ? { $lt: cursorValue } : { $lte: cursorValue };
    }
});
//# sourceMappingURL=index.js.map