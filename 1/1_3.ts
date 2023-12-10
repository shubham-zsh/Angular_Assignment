
function DisplayFactors(Num : number) : void
{
    var Cnt : number = 0;

    for(Cnt = 1; Cnt <= (Num/2); Cnt++)
    {
        if((Num % Cnt) == 0)
        {
            console.log(Cnt);
        }
    }
}

var No : number = 0;
No = 20;

DisplayFactors(No);