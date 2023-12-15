function Summation(Brr : number[]) : number
{
    var i : number = 0;
    var Sum : number = Brr[0];

    for(i = 0; i < Brr.length; i++)
    {
        Sum = Sum + Brr[i];
    }
    return Sum;
}

var Arr : number[] = [23,69,6,29,56,45,77,32]
var Ret : number = 0;

Ret = Summation(Arr);

console.log("Summation of all elements of the array is : "+Ret);