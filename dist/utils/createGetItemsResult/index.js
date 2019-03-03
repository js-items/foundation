"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createCursorsFromItems_1 = __importDefault(require("../createCursorsFromItems"));
exports.default = (function (_a) {
    var items = _a.items, isEnd = _a.isEnd, pagination = _a.pagination, sort = _a.sort;
    var before = pagination.before, after = pagination.after;
    var isBackward = before !== undefined;
    var isForward = after !== undefined;
    var cursor = isBackward ? before : after;
    var isStart = cursor === undefined;
    var hasBefore = (isBackward && !isEnd) || (isForward && !isStart);
    var hasAfter = (isForward && !isEnd) || (isBackward && !isStart);
    var cursorResults = createCursorsFromItems_1.default({
        cursor: cursor,
        items: items,
        sort: sort
    });
    return {
        cursor: {
            after: cursorResults.after,
            before: cursorResults.before,
            hasAfter: hasAfter,
            hasBefore: hasBefore
        },
        items: items
    };
});
//# sourceMappingURL=index.js.map