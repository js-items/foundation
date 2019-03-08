"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import runFilterTests from "./subtests/runFilterTests";
var runPaginationTests_1 = __importDefault(require("./subtests/runPaginationTests"));
// import runSortTests from "./subtests/runSortTests";
exports.default = (function (options) {
    describe("getItems", function () {
        // runFilterTests(options);
        runPaginationTests_1.default(options);
        // runSortTests(options);
    });
});
//# sourceMappingURL=test.js.map