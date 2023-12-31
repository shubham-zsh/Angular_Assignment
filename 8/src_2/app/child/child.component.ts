import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() public Sender = new EventEmitter();

  public msg : string = " ";
  OnAction(str : any)
  {
    this.Sender.emit(str);
  }

}
