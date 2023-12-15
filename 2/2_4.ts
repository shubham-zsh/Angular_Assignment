let Fun = (No : number) : boolean => 
{
    let Digit : number = 0;
    let Power : number = 0;
    let i : number = 0;
    let j : number = 0;
    let Arr : number[] = [];
    let Sum : number = 1;
    let temp : number = No;
    let temp1 : number = 0;

    while(temp >= 1)
    {
        Digit = temp % 10;
        temp = temp / 10;
        Arr[Power] = Digit;
        Power++;
        console.log(Digit);
    }
    
    for(i = 0; i < Arr.length; i++)
    {
        Sum = 1;
        for(j = 0; j < Power; j++)
        {
            Sum = Arr[j] * Sum
            
        }
        temp1 = temp1 + Sum;
        console.log(" temp : "+temp1);
    }

    if(temp1 == No)
    {
        return true;
    }
    else 
    {
        return false;
    }
}

let No : number = 153;
let Ret : boolean = false;

Ret = Fun(No);

if(Ret == true)
{
    console.log("Given number is Armstrong number : ");
}
else
{
    console.log("Given number is not Armstrong number : ");
}