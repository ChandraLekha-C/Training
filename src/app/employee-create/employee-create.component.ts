import { Component } from '@angular/core';
import { EmployeeserviceService } from '../service/employeeservice.service';
import { EmployeeDto } from '../model/employeedto';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {
  newEmployee: EmployeeDto = {
    Employee_Id: 0,
    Employee_Name: '',
    Age: 0,
    Department_Id: 0,
    Role: ''
  };

  constructor(
    private employeeService: EmployeeserviceService,
    private router: Router
  ) {}

  createEmployee(): void {
    this.employeeService.createEmployee(this.newEmployee).subscribe(
      response => {
        console.log('Employee created!', response);
        this.newEmployee = { Employee_Id: 0, Employee_Name: '', Age: 0, Department_Id: 0, Role: '' };
        this.router.navigate(['/list-employee']);
      },
      error => console.error(error)
    );
  }

  onSubmit() {
    this.createEmployee();
  }
}
