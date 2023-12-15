function Maximum(Brr : number[]) : number
{
    var i : number = 0;
    var MAX : number = Brr[0];

    for(i = 0; i < Brr.length; i++)
    {
        if(Brr[i] > MAX)
        {
            MAX = Brr[i];
        }
    }
    return MAX;
}

var Arr : number[] = [23,69,6,29,56,45,77,32]
var Ret : number = 0;

Ret = Maximum(Arr);

console.log("lagest Number from the array is : "+Ret);