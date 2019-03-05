"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var make_error_1 = require("make-error");
var ItemNotFoundError = /** @class */ (function (_super) {
    __extends(ItemNotFoundError, _super);
    function ItemNotFoundError(itemName, itemId) {
        var _this = _super.call(this) || this;
        _this.itemName = itemName;
        _this.itemId = itemId;
        return _this;
    }
    return ItemNotFoundError;
}(make_error_1.BaseError));
exports.default = ItemNotFoundError;
//# sourceMappingURL=ItemNotFoundError.js.map