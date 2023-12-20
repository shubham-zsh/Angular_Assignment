
class circle
{
    Radius : number;
    PI : number = 3.14;

    constructor(No : number)
    {
        this.Radius = No; 
    }

    Area()
    {
        var Ans : number = 0;
        Ans = this.Radius * this.Radius * this.PI;
        return Ans;
    }
}

var No1 : number = 5;
var No2 : nunmber = 10;
var Ret : number = 0;

var obj1 = new circle(No1);
Ret = obj1.Area();
var obj2 = new circle(No2);
Ret = obj2.Area();

console.log("Area of circle is : "+Ret);
