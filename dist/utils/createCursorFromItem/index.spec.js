"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var testItem_1 = __importDefault(require("../../functions/utils/testItem"));
var sortOrder_1 = require("../../interfaces/sortOrder");
var index_1 = __importDefault(require("./index"));
describe("@createCursorFromEntity", function () {
    it("should return the correct cursor", function () {
        var result = index_1.default(testItem_1.default, { id: sortOrder_1.asc });
        expect(result).toBe("eyJpZCI6IjZkYTlkY2U2LWJlNDAtNGZhYy1iZDljLTZhMmYzNDhhMWM4NyJ9");
    });
});
//# sourceMappingURL=index.spec.js.map