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
var No = 5;
var Ret = 0;
var obj = new circle(No);
Ret = obj.Area();
console.log("Area of circle is : " + Ret);
