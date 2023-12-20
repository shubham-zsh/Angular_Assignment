
class Arithmatic
{
    No1 : number
    No2 : number 

    constructor(A : number, B : number)
    {
        this.No1 = A;
        this.No2 = B;
    }

    Addition() : number
    {
        return this.No1 + this.No2;
    }
    Substraction() : number
    {
        return this.No1 - this.No2;
    }
    Division() : number 
    {
        return (this.No1 / this.No2);
    }
    Multiplication() : number 
    {
        return this.No1 * this.No2;
    }
}

var obj1 = new Arithmatic(21,11);
var obj2 = new Arithmatic(101,51);

var Result : number = 0;

Result = obj1.Addition();
console.log(Result);

Result = obj1.Substraction();
console.log(Result);

Result = obj1.Division();
console.log(Result);

Result = obj1.Multiplication();
console.log(Result);