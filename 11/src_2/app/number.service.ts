import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  No : number;

  constructor() {
    this.No = 15;
   }

   ChkPrime()
   {
      for(let i : number = 2; i <= (this.No/2); i++)
      {
        if(this.No % i == 0)
        {
          return "This is not a Prime number";
        }
      }

      return "This is Prime number";
   }
}