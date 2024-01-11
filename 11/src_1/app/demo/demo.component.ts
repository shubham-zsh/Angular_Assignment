import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers : [ArithmeticService],
})
export class DemoComponent 
{
  public Add : number;
  public Sub : number;

  constructor(private obj : ArithmeticService)
  {
    this.Add =  this.obj.Add();
    this.Sub = this.obj.Sub();
  }

}