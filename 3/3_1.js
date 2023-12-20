var Arithmatic = /** @class */ (function () {
    function Arithmatic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithmatic.prototype.Addition = function () {
        return this.No1 + this.No2;
    };
    Arithmatic.prototype.Substraction = function () {
        return this.No1 - this.No2;
    };
    Arithmatic.prototype.Division = function () {
        return (this.No1 / this.No2) | 0;
    };
    Arithmatic.prototype.Multiplication = function () {
        return this.No1 * this.No2;
    };
    return Arithmatic;
}());
var obj1 = new Arithmatic(21, 11);
var obj2 = new Arithmatic(101, 51);
var Result = 0;
Result = obj1.Addition();
console.log(Result);
Result = obj1.Substraction();
console.log(Result);
Result = obj1.Division();
console.log(Result);
Result = obj1.Multiplication();
console.log(Result);
