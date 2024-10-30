import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-reusable-button',
  standalone: true,
  imports: [],
  templateUrl: './reusable-button.component.html',
  styleUrl: './reusable-button.component.css'
})
export class ReusableButtonComponent {

  @Input() color: string = 'blue'; // Color por defecto
  @Input() text: string = 'Click me'; // Texto por defecto
  @Output() btnClick = new EventEmitter<void>();


  onClick() {
    this.btnClick.emit();
  }
 


}

