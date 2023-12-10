function Fibonacci(Value : number) : void
{
    var Sum1 : number = 1;
    var Sum2 : number = 0;
    var Cnt : number = 0;
    var fSeries : number = 0;

    for(Cnt = 1; Cnt < Value; Cnt++)
    {
        fSeries = Sum1 + Sum2;
        Sum2 = Sum1;
        Sum1 = fSeries;
        console.log(fSeries);
    }
}

var No : number = 20;

Fibonacci(No);