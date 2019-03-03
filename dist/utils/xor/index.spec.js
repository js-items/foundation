"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
describe("xor", function () {
    it("returns false when both condition are true", function () {
        expect(index_1.default(true, true)).toBe(false);
    });
    it("returns true when first condition is true and second condition is false", function () {
        expect(index_1.default(true, false)).toBe(true);
    });
    it("returns true when first condition is false and second condition is true", function () {
        expect(index_1.default(false, true)).toBe(true);
    });
});
//# sourceMappingURL=index.spec.js.map