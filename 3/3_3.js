var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var circle = /** @class */ (function () {
    function circle(No) {
        this.PI = 3.14;
        this.Radius = No;
    }
    circle.prototype.Area = function () {
        var Ans = 0;
        Ans = this.Radius * this.Radius * this.PI;
        return Ans;
    };
    return circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Value = 2;
        return _this;
    }
    CircleX.prototype.Circumference = function () {
        var Ans = 0;
        Ans = this.Radius * this.PI * this.Value;
        return Ans;
    };
    return CircleX;
}(circle));
var No1 = 5;
var No2 = 10;
var Ret = 0;
var obj1 = new CircleX(No1);
Ret = obj1.Circumference();
var obj2 = new CircleX(No2);
Ret = obj2.Circumference();
console.log("Circumference of circle is : " + Ret);
