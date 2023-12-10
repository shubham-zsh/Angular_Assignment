
function ChkPrime(Value : number) : boolean
{
    var i : number = 0;

    for(i = 2; i < Value; i++)
    {
        if((Value % i) == 0)
        {
            return false;
        }
    }
    return true;
}

var No : number = 5;
var Ret : boolean = false;

Ret = ChkPrime(No);

if(Ret == true)
{
    console.log(No+" is Prime");
}
else
{
    console.log(No+" is not Prime");
}