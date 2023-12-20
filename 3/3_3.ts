
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

class CircleX extends circle
{
    Value : number = 2;

    Circumference()
    {
        var Ans : number = 0;
        Ans = this.Radius * this.PI * this.Value;
        return Ans;
    }
}

var No1 : number = 5;
var No2 : number = 10;
var Ret : number = 0;

var obj1 = new CircleX(No1);
Ret = obj1.Circumference();

var obj2 = new CircleX(No2);
Ret = obj2.Circumference();

console.log("Circumference of circle is : "+Ret);
