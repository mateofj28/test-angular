import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css'
})
export class CustomInputComponent {
  @Input() label: string = ''; // Etiqueta por defecto
  @Input() placeholder: string = ''; // Placeholder por defecto
  @Input() type: string = 'text'; // Tipo de entrada por defecto
}




