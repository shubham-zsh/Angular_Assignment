import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';
import { count } from 'console';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers : [NumberService,StringService]
})
export class Child1Component {

  IsPrime : string ;
  Count : any;
  constructor(private obj1 : NumberService , private obj2 : StringService)
  {
    this.IsPrime = this.obj1.ChkPrime();
    this.Count = this.obj2.CountCapital();
  }


}