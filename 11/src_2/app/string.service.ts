import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {
  str : string;
  constructor() 
  {
    this.str = "PrasaKdadam";
  }

  CountCapital()
  {
    let capitalCount = 0;
    for (let i = 0; i < this.str.length; i++) 
    { 
      const char = this.str[i];
      if (char >= 'A' && char <= 'Z') 
      { 
        capitalCount++;
      }
    }
    return capitalCount;
  }
}