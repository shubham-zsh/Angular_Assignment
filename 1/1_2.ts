
function FindArea(Value1 : number, Value2 : number = 3.14) : number
{
    var Area : number = 0;
    Area = (Value1 * Value1) * Value2; 
    return Area;
}

var No1 : number = 0;
var Ret : number = 0;

No1 = 5;

Ret = FindArea(No1);

console.log("Area is : "+Ret);
