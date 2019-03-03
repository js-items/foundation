"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var testItem_1 = __importDefault(require("../../functions/utils/testItem"));
var cursor_1 = require("../../interfaces/cursor");
var sortOrder_1 = require("../../interfaces/sortOrder");
var createCursorFromItem_1 = __importDefault(require("../createCursorFromItem"));
var index_1 = __importDefault(require("./index"));
describe("createPaginationFilter", function () {
    var sort = { numberProperty: sortOrder_1.desc, id: sortOrder_1.asc };
    it("should return empty filter when the cursor is start", function () {
        var pagination = {
            after: cursor_1.start,
            before: cursor_1.start,
            limit: 1
        };
        var actualResult = index_1.default(pagination, sort);
        expect(actualResult).toEqual({});
    });
    it("should return the correct filter when after cursor is defined", function () {
        var cursor = createCursorFromItem_1.default(testItem_1.default, sort);
        var pagination = { after: cursor, limit: 1 };
        var actualResult = index_1.default(pagination, sort);
        var expectedResult = {
            $or: [
                {
                    numberProperty: { $lte: testItem_1.default.numberProperty }
                },
                {
                    id: { $gt: testItem_1.default.id },
                    numberProperty: testItem_1.default.numberProperty
                }
            ]
        };
        expect(actualResult).toEqual(expectedResult);
    });
    it("should return the correct filter when before cursor is defined", function () {
        var cursor = createCursorFromItem_1.default(testItem_1.default, sort);
        var pagination = { before: cursor, limit: 1 };
        var actualResult = index_1.default(pagination, sort);
        var expectedResult = {
            $or: [
                {
                    numberProperty: { $gte: testItem_1.default.numberProperty }
                },
                {
                    id: { $lt: testItem_1.default.id },
                    numberProperty: testItem_1.default.numberProperty
                }
            ]
        };
        expect(actualResult).toEqual(expectedResult);
    });
});
//# sourceMappingURL=index.spec.js.map