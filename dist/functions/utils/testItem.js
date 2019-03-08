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
Object.defineProperty(exports, "__esModule", { value: true });
exports.testId = "6da9dce6-be40-4fac-bd9c-6a2f348a1c87";
var testItem = {
    booleanProperty: false,
    id: exports.testId,
    numberProperty: 1,
    stringProperty: "foo"
};
exports.firstItemId = "id1";
exports.secondItemId = "id2";
exports.firstItem = __assign({}, testItem, { id: exports.firstItemId, numberProperty: 1, stringProperty: "zebra" });
exports.secondItem = __assign({}, testItem, { id: exports.secondItemId, numberProperty: 2, stringProperty: "slon" });
exports.default = testItem;
//# sourceMappingURL=testItem.js.map