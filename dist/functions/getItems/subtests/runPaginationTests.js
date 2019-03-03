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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var cursor_1 = require("../../../interfaces/cursor");
var sortOrder_1 = require("../../../interfaces/sortOrder");
var createCursorFromItem_1 = __importDefault(require("../../../utils/createCursorFromItem"));
var testItem_1 = __importDefault(require("../../utils/testItem"));
exports.default = (function (_a) {
    var facade = _a.facade;
    var sort = { id: sortOrder_1.asc };
    var firstId = "id1";
    var secondId = "id2";
    var firstItem = __assign({}, testItem_1.default, { id: firstId });
    var secondItem = __assign({}, testItem_1.default, { id: secondId });
    var firstCursor = createCursorFromItem_1.default(firstItem, sort);
    var secondCursor = createCursorFromItem_1.default(secondItem, sort);
    var basePagination = { before: undefined, after: undefined, limit: 1 };
    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, facade.createItem({ id: firstId, item: firstItem })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, facade.createItem({ id: secondId, item: secondItem })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, facade.deleteItems({
                        filter: {}
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("return all items", function () { return __awaiter(_this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, facade.getItems({})];
                case 1:
                    result = _a.sent();
                    expect(result).toEqual({
                        cursor: {
                            after: secondCursor,
                            before: firstCursor,
                            hasAfter: false,
                            hasBefore: false
                        },
                        items: [firstItem, secondItem]
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it("should return first entity when after is start cursor", function () { return __awaiter(_this, void 0, void 0, function () {
        var pagination, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pagination = __assign({}, basePagination, { after: cursor_1.start });
                    return [4 /*yield*/, facade.getItems({ pagination: pagination, sort: sort })];
                case 1:
                    result = _a.sent();
                    expect(result).toEqual({
                        cursor: {
                            after: firstCursor,
                            before: firstCursor,
                            hasAfter: true,
                            hasBefore: false
                        },
                        items: [firstItem]
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it("should return second entity when after is firstCursor", function () { return __awaiter(_this, void 0, void 0, function () {
        var pagination, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pagination = __assign({}, basePagination, { after: firstCursor });
                    return [4 /*yield*/, facade.getItems({ pagination: pagination, sort: sort })];
                case 1:
                    result = _a.sent();
                    expect(result).toEqual({
                        cursor: {
                            after: secondCursor,
                            before: secondCursor,
                            hasAfter: false,
                            hasBefore: true
                        },
                        items: [secondItem]
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it("should return no entities when after is secondCursor", function () { return __awaiter(_this, void 0, void 0, function () {
        var pagination, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pagination = __assign({}, basePagination, { after: secondCursor });
                    return [4 /*yield*/, facade.getItems({ pagination: pagination, sort: sort })];
                case 1:
                    result = _a.sent();
                    expect(result).toEqual({
                        cursor: {
                            after: secondCursor,
                            before: secondCursor,
                            hasAfter: false,
                            hasBefore: true
                        },
                        items: []
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it("should return no entities when before is firstCursor", function () { return __awaiter(_this, void 0, void 0, function () {
        var pagination, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pagination = __assign({}, basePagination, { before: firstCursor });
                    return [4 /*yield*/, facade.getItems({ pagination: pagination, sort: sort })];
                case 1:
                    result = _a.sent();
                    expect(result).toEqual({
                        cursor: {
                            after: firstCursor,
                            before: firstCursor,
                            hasAfter: true,
                            hasBefore: false
                        },
                        items: []
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it("should return no entities when before is secondCursor", function () { return __awaiter(_this, void 0, void 0, function () {
        var pagination, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pagination = __assign({}, basePagination, { before: secondCursor });
                    return [4 /*yield*/, facade.getItems({ pagination: pagination, sort: sort })];
                case 1:
                    result = _a.sent();
                    expect(result).toEqual({
                        cursor: {
                            after: secondCursor,
                            before: secondCursor,
                            hasAfter: false,
                            hasBefore: true
                        },
                        items: [firstCursor]
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    // tslint:disable-next-line:max-file-line-count
});
//# sourceMappingURL=runPaginationTests.js.map