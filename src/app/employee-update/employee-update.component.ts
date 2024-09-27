import { Component } from '@angular/core';
import { EmployeeDto } from '../model/employeedto';
import { CommonModule } from '@angular/common';
import { EmployeeserviceService } from '../service/employeeservice.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  imports:[CommonModule,FormsModule],
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})

export class EmployeeUpdateComponent {
  employeeToUpdate: EmployeeDto = {
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

  updateEmployee() {
    this.employeeService.updateEmployee(this.employeeToUpdate).subscribe(
      response => console.log('Employee updated!', response),
      error => console.error(error)
    );
  }
}
