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
var cursor_1 = require("../../interfaces/cursor");
var sortOrder_1 = require("../../interfaces/sortOrder");
var index_1 = __importDefault(require("./index"));
describe("createGetItemsResult backward", function () {
    var sort = { id: sortOrder_1.asc };
    var firstId = "test_id_1";
    var firstItem = __assign({}, testItem_1.default, { id: firstId });
    var firstCursor = "eyJpZCI6InRlc3RfaWRfMSJ9";
    var secondCursor = "eyJpZCI6InRlc3RfaWRfMiJ9";
    it("returns correct result when there are no items and no cursors present", function () {
        var items = [];
        var pagination = {
            after: cursor_1.start,
            before: cursor_1.start,
            limit: 1
        };
        var isEnd = true;
        var result = index_1.default({ items: items, isEnd: isEnd, pagination: pagination, sort: sort });
        expect(result).toEqual({
            cursor: {
                after: cursor_1.start,
                before: cursor_1.start,
                hasAfter: false,
                hasBefore: false
            },
            items: items
        });
    });
    it("returns correct result when no items present and cursor is present", function () {
        var items = [];
        var pagination = {
            before: firstCursor,
            limit: 1
        };
        var isEnd = true;
        var result = index_1.default({ items: items, isEnd: isEnd, pagination: pagination, sort: sort });
        expect(result).toEqual({
            cursor: {
                after: firstCursor,
                before: firstCursor,
                hasAfter: true,
                hasBefore: false
            },
            items: items
        });
    });
    it("returns correct result when items and cursor is present", function () {
        var items = [firstItem];
        var pagination = {
            before: secondCursor,
            limit: 1
        };
        var isEnd = true;
        var result = index_1.default({ items: items, isEnd: isEnd, pagination: pagination, sort: sort });
        expect(result).toEqual({
            cursor: {
                after: firstCursor,
                before: firstCursor,
                hasAfter: true,
                hasBefore: false
            },
            items: items
        });
    });
});
//# sourceMappingURL=before.spec.js.map