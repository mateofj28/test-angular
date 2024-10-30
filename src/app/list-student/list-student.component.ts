import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent {

  constructor(private location: Location) {}

  users = [
    { name: 'User 1', description: 'Description 1...' },
    { name: 'User 2', description: 'Description 2...' },
    { name: 'User 3', description: 'Description 3...' },
    { name: 'User 4', description: 'Description 4...' },
    { name: 'User 5', description: 'Description 5...' },
    { name: 'User 6', description: 'Description 6...' },
    { name: 'User 7', description: 'Description 7...' },
    { name: 'User 8', description: 'Description 8...' }
  ];

  goBack(): void {
    this.location.back();
  }

}
