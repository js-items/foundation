"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createCursorFromItem_1 = __importDefault(require("../createCursorFromItem"));
exports.default = (function (_a) {
    var items = _a.items, cursor = _a.cursor, sort = _a.sort;
    if (items.length !== 0) {
        var first = items[0];
        var last = items[items.length - 1];
        return {
            after: createCursorFromItem_1.default(last, sort),
            before: createCursorFromItem_1.default(first, sort)
        };
    }
    return {
        after: cursor,
        before: cursor
    };
});
//# sourceMappingURL=index.js.map