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
var SortOrder_1 = require("../../interfaces/SortOrder");
var index_1 = __importDefault(require("./index"));
describe("createGetItemsResult forward", function () {
    var sort = { id: SortOrder_1.asc };
    var secondId = "test_id_2";
    var secondItem = __assign({}, testItem_1.default, { id: secondId });
    var firstCursor = "eyJpZCI6InRlc3RfaWRfMSJ9";
    var secondCursor = "eyJpZCI6InRlc3RfaWRfMiJ9";
    it("returns correct result when items and cursor is present", function () {
        var items = [secondItem];
        var pagination = {
            after: firstCursor,
            limit: 1
        };
        var isEnd = true;
        var result = index_1.default({ items: items, isEnd: isEnd, pagination: pagination, sort: sort });
        expect(result).toEqual({
            cursor: {
                after: secondCursor,
                before: secondCursor,
                hasAfter: false,
                hasBefore: true
            },
            items: items
        });
    });
    it("returns correct result when no items and cursor is present", function () {
        var items = [];
        var pagination = {
            after: secondCursor,
            limit: 1
        };
        var isEnd = true;
        var result = index_1.default({ items: items, isEnd: isEnd, pagination: pagination, sort: sort });
        expect(result).toEqual({
            cursor: {
                after: secondCursor,
                before: secondCursor,
                hasAfter: false,
                hasBefore: true
            },
            items: items
        });
    });
});
//# sourceMappingURL=after.spec.js.map