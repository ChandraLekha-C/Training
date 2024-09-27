import { Component } from '@angular/core';
import { EmployeeserviceService } from '../service/employeeservice.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { error } from 'console';

@Component({
  standalone: true,
  imports: [CommonModule,FormsModule],
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent {
  employeeId: number = 0;
  
  constructor(
    private employeeService: EmployeeserviceService,
    private router: Router
  ) {}
  deleteEmployee() {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(this.employeeId).subscribe(
        response => {
          console.log('Employee deleted!', response);
          this.employeeId = 0; 
        },
        error => {
          console.error(error);
          alert('Failed to delete employee. Please try again.'); 
        }
      );
    }
  }
}
