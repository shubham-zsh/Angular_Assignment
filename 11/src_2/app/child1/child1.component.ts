import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers : [NumberService]
})
export class Child1Component {

  IsPrime : string ;
  constructor(private obj : NumberService)
  {
    this.IsPrime = this.obj.ChkPrime();
  }


}