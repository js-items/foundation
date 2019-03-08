"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var ItemNotFoundError_1 = __importDefault(require("../../errors/ItemNotFoundError"));
var testItem_1 = __importStar(require("../utils/testItem"));
var testUsingFilter_1 = __importDefault(require("../utils/testUsingFilter"));
exports.default = (function (_a) {
    var facade = _a.facade;
    describe("getItem", function () {
        testUsingFilter_1.default({
            facade: facade,
            toGetAllItems: function (filter) { return __awaiter(_this, void 0, void 0, function () {
                var firstItemResult, secondItemResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, facade.getItem({
                                filter: filter,
                                id: testItem_1.firstItemId
                            })];
                        case 1:
                            firstItemResult = _a.sent();
                            expect(firstItemResult.item).toEqual(testItem_1.firstItem);
                            return [4 /*yield*/, facade.getItem({
                                    filter: filter,
                                    id: testItem_1.secondItemId
                                })];
                        case 2:
                            secondItemResult = _a.sent();
                            expect(secondItemResult.item).toEqual(testItem_1.secondItem);
                            return [2 /*return*/];
                    }
                });
            }); },
            toGetFirstItem: function (filter) { return __awaiter(_this, void 0, void 0, function () {
                var firstItemResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, facade.getItem({
                                filter: filter,
                                id: testItem_1.firstItemId
                            })];
                        case 1:
                            firstItemResult = _a.sent();
                            expect(firstItemResult.item).toEqual(testItem_1.firstItem);
                            return [2 /*return*/];
                    }
                });
            }); },
            toGetNoItems: function (filter) { return __awaiter(_this, void 0, void 0, function () {
                var e_1, e_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, facade.getItem({ id: testItem_1.firstItemId, filter: filter })];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _a.sent();
                            expect(e_1).toBeInstanceOf(ItemNotFoundError_1.default);
                            return [3 /*break*/, 3];
                        case 3:
                            _a.trys.push([3, 5, , 6]);
                            return [4 /*yield*/, facade.getItem({ id: testItem_1.secondItemId, filter: filter })];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 6];
                        case 5:
                            e_2 = _a.sent();
                            expect(e_2).toBeInstanceOf(ItemNotFoundError_1.default);
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            }); },
            toGetSecondItem: function (filter) { return __awaiter(_this, void 0, void 0, function () {
                var secondItemResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, facade.getItem({
                                filter: filter,
                                id: testItem_1.secondItemId
                            })];
                        case 1:
                            secondItemResult = _a.sent();
                            expect(secondItemResult.item).toEqual(testItem_1.secondItem);
                            return [2 /*return*/];
                    }
                });
            }); }
        });
        it("throws error when trying to get an item which does not exist", function () { return __awaiter(_this, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        expect.assertions(1);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, facade.getItem({ id: testItem_1.testId })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _a.sent();
                        expect(e_3).toBeInstanceOf(ItemNotFoundError_1.default);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        it("gets an item which exists", function () { return __awaiter(_this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, facade.createItem({ id: testItem_1.testId, item: testItem_1.default })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, facade.getItem({ id: testItem_1.testId })];
                    case 2:
                        item = (_a.sent()).item;
                        expect(item).toEqual(testItem_1.default);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=test.js.map