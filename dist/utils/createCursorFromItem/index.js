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
var btoa_1 = __importDefault(require("btoa"));
exports.default = (function (item, sort) {
    var sortKeys = Object.keys(sort);
    var cursorResult = sortKeys.reduce(
    // tslint:disable-next-line:no-any
    function (result, sortKey) {
        var _a;
        return (__assign({}, result, (_a = {}, _a[sortKey] = item[sortKey], _a)));
    }, {});
    return btoa_1.default(JSON.stringify(cursorResult));
});
//# sourceMappingURL=index.js.map