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
    var isEnd = true;
    var secondId = "test_id_2";
    var secondItem = __assign({}, testItem_1.default, { id: secondId });
    var firstCursor = "eyJpZCI6InRlc3RfaWRfMSJ9";
    var secondCursor = "eyJpZCI6InRlc3RfaWRfMiJ9";
    var expectCorrectResult = function (_a) {
        var items = _a.items, after = _a.after, expectedCursor = _a.expectedCursor;
        var pagination = {
            after: after,
            limit: 1
        };
        var result = index_1.default({ items: items, isEnd: isEnd, pagination: pagination, sort: sort });
        expect(result).toEqual({
            cursor: expectedCursor,
            items: items
        });
    };
    it("returns correct result when items and cursor is present", function () {
        var items = [secondItem];
        var expectedCursor = {
            after: secondCursor,
            before: secondCursor,
            hasAfter: false,
            hasBefore: true
        };
        expectCorrectResult({
            after: firstCursor,
            expectedCursor: expectedCursor,
            items: items
        });
    });
    it("returns correct result when no items and cursor is present", function () {
        var items = [];
        var expectedCursor = {
            after: secondCursor,
            before: secondCursor,
            hasAfter: false,
            hasBefore: true
        };
        expectCorrectResult({
            after: secondCursor,
            expectedCursor: expectedCursor,
            items: items
        });
    });
});
//# sourceMappingURL=after.spec.js.map