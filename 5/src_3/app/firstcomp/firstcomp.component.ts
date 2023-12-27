import { Component } from '@angular/core';
import { SecondcompComponent } from '../secondcomp/secondcomp.component';

@Component({
  selector: 'app-firstcomp',
  standalone: true,
  imports: [SecondcompComponent],
  templateUrl: './firstcomp.component.html',
  styleUrl: './firstcomp.component.css'
})
export class FirstcompComponent {

}
