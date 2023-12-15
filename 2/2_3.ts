function Maximum(Brr : number[] ): number
{
    var i : number = 0;
    var Max : number = Brr[1];
    var SMax : number = Brr[0];
    var temp : number = 0;

    if(Max < SMax)
    {   
        temp = Max;
        Max = SMax;
        SMax = temp;
    }

    for(i = 2; i < Brr.length; i++)
    {
        if(Brr[i] > Max)
        {
            SMax = Max;
            Max = Brr[i];
        } 
        else if((Brr[i] < Max) && (Brr[i] > SMax))
        {
            SMax = Brr[i];   
        }
    }
    return SMax

}

var Arr : number[] = [23,69,6,29,56,45,77,32]
var Ret : number = 0;

Ret = Maximum(Arr);

console.log("Second Largest element from the array is : "+Ret);