let str : String = "marvellous"

let ip : String = "My name is marvellous and malegaon is city"
let bFlag : boolean = false;
let i , j = 0 ;

for ( i = 0; i< ip.length ; i++)
{
    if (ip[i]== str[0])
    {
        for (j = 0 ; j< str.length ; j++)
        {
            
            if(str[j] != ip[i])
            {
                break;
            }
            i++;
        }
        if (j >= str.length)
        {
            bFlag =  true;
        }
    }
}
console.log(bFlag);

