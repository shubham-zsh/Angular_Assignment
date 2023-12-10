
function FindMax(Value1 : number, Value2 : number, Value3 : number) : number
{
    if(Value1 >= Value2 && Value1 >= Value3)
    {
        return Value1;
    }
    else if(Value2 >= Value1 && Value2 >= Value3)
    {
        return Value2;
    }
    else
    {
        return Value3;
    }
}

var No1 : number = 0;
var No2 : number = 0;
var No3 : number = 0;
var Ret : number = 0;

No1 = 23, No2 = 89, No3 = 6;

Ret = FindMax(No1, No2, No3);

console.log("Largest Number is : "+Ret);
