import { Component } from '@angular/core';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { ReusableButtonComponent } from '../reusable-button/reusable-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-student',
  standalone: true,
  imports: [CustomInputComponent, ReusableButtonComponent],
  templateUrl: './crud-student.component.html',
  styleUrl: './crud-student.component.css'
})
export class CrudStudentComponent {

  constructor(private router: Router) {}

  navigateToEstudiantes() {
    this.router.navigate(['/students'])
  }


}
