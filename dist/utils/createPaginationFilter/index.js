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
var atob_1 = __importDefault(require("atob"));
var Cursor_1 = require("../../interfaces/Cursor");
var getCursorKeyFilter_1 = __importDefault(require("../getCursorKeyFilter"));
exports.default = (function (pagination, sort) {
    var before = pagination.before, after = pagination.after;
    if (before === Cursor_1.start && after === Cursor_1.start) {
        return {};
    }
    var cursor = before !== undefined ? before : after;
    var cursorObj = JSON.parse(atob_1.default(cursor));
    var sortKeys = Object.keys(sort);
    var sortKeyFilters = sortKeys.map(function (sortKey, keyIndex) {
        var _a;
        var sortKeysToMatch = sortKeys.slice(0, keyIndex);
        var matchFilter = sortKeysToMatch.reduce(
        // tslint:disable-next-line:no-any
        function (result, sortKeyToMatch) {
            var _a;
            return (__assign({}, result, (_a = {}, _a[sortKeyToMatch] = cursorObj[sortKeyToMatch], _a)));
        }, {});
        var cursorKeyFilter = getCursorKeyFilter_1.default(sortKey, sort, pagination, cursorObj);
        return __assign({}, matchFilter, (_a = {}, _a[sortKey] = cursorKeyFilter, _a));
    });
    return { $or: sortKeyFilters };
});
//# sourceMappingURL=index.js.map