import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  public str = "Marvellous Infosystems";

  ToUpper()
  {
    this.str = this.str.toUpperCase();
  }

  ToLower()
  {
    this.str = this.str.toLowerCase();
  }
}
