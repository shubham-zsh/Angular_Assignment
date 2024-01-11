import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {
   
  No1 : number;
  No2 : number;
  constructor() 
  {
    this.No1  = 5;
    this.No2  = 6;   
  }
  Add()
  {
    return (this.No1 + this.No2);
  }
  Sub()
  {
    return (this.No1 - this.No2);
  }
}