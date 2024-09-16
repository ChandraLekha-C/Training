import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeeDto } from '../employee.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {
  employee: EmployeeDto = {
    Employee_Id: 0,
    Employee_Name: '',
    Age: 0,
    Department_Id: 0,
    Role: ''
  };

  constructor(private employeeService: EmployeeService, private router: Router) { }

  createEmployee(): void {
    this.employeeService.createEmployee(this.employee).subscribe(
      () => this.router.navigate(['/employees']),
      error => console.error(error)
    );
  }
}
