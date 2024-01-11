import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers : [StringService]
})
export class Child2Component {
    CapitalCount : number;

    constructor ( private obj : StringService)
    {
      this.CapitalCount = this.obj.CountCapital();
    }

}