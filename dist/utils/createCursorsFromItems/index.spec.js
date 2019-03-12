"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var testItem_1 = __importDefault(require("../../functions/utils/testItem"));
var Cursor_1 = require("../../interfaces/Cursor");
var SortOrder_1 = require("../../interfaces/SortOrder");
var index_1 = __importDefault(require("./index"));
describe("createCursorsFromEntities", function () {
    var sort = { id: SortOrder_1.asc };
    var firstId = "id1";
    var secondId = "id2";
    var firstItem = __assign({}, testItem_1.default, { id: firstId });
    var secondItem = __assign({}, testItem_1.default, { id: secondId });
    var firstCursor = "eyJpZCI6ImlkMSJ9";
    var secondCursor = "eyJpZCI6ImlkMiJ9";
    it("return cursor when no items", function () {
        var items = [];
        var cursor = Cursor_1.start;
        var result = index_1.default({ cursor: cursor, items: items, sort: sort });
        expect(result).toEqual({
            after: Cursor_1.start,
            before: Cursor_1.start
        });
    });
    it("return correct cursors when there is one item", function () {
        var items = [firstItem];
        var cursor = Cursor_1.start;
        var result = index_1.default({ cursor: cursor, items: items, sort: sort });
        expect(result).toEqual({
            after: firstCursor,
            before: firstCursor
        });
    });
    it("should return the correct cursors when there are many items", function () {
        var items = [firstItem, secondItem];
        var cursor = Cursor_1.start;
        var result = index_1.default({ cursor: cursor, items: items, sort: sort });
        expect(result).toEqual({
            after: secondCursor,
            before: firstCursor
        });
    });
});
//# sourceMappingURL=index.spec.js.map