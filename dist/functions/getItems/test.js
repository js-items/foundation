"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var runFilterTests_1 = __importDefault(require("./subtests/runFilterTests"));
var runPaginationTests_1 = __importDefault(require("./subtests/runPaginationTests"));
var runSortTests_1 = __importDefault(require("./subtests/runSortTests"));
exports.default = (function (options) {
    describe("runFilterTests", function () {
        runFilterTests_1.default(options);
    });
    describe("runSortTests", function () {
        runSortTests_1.default(options);
    });
    describe("runPaginationTests", function () {
        runPaginationTests_1.default(options);
    });
});
//# sourceMappingURL=test.js.map